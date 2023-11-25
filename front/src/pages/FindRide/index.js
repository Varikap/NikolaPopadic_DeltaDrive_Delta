import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./findRide.css";
import { useDispatch, useSelector } from "react-redux";
import { findRide, orderRide } from "../../actions/rideActions";

const FindRide = () => {
  const dispatch = useDispatch();
  const { rides } = useSelector((state) => state.ride);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [destLatitude, setDestLatitude] = useState(null);
  const [destLongitude, setDestLongitude] = useState(null);
  const [selectedRider, setSelectedRider] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    if (latitude && longitude) {
      dispatch(
        findRide({
          latitude: latitude,
          longitude: longitude,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  const handleMarkerClick = (rider) => {
    setSelectedRider(rider);
  };

  const handleBookClick = (rider) => {
    const request = {
      startLocationLatitude: latitude,
      startLocationLongitude: longitude,
      endLocationLatitude: destLatitude,
      endLocationLongitude: destLongitude,
      // TODO check price
      totalPrice: 1,
      vehicleId: rider.id,
      driverId: rider.driver.id,
    };
    dispatch(orderRide(request));
  };

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setDestLatitude(lat);
    setDestLongitude(lng);
  };

  const userIcon = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/images/map-marker.png`,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const driverIcon = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/images/carMarker.png`,
    iconSize: [31, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const destinationIcon = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/images/destinationMarker.png`,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="map-container">
      <Map
        center={[latitude || 0, longitude || 0]}
        zoom={17}
        style={{ height: "100vh", width: "100%" }}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {rides.map((rider, index) => (
          <Marker
            key={index}
            position={[rider.latitude, rider.longitude]}
            onClick={() => handleMarkerClick(rider)}
            icon={driverIcon}
          >
            <Popup>
              <strong>{rider.brand}</strong>
              <br />
              {rider.firstName} {rider.lastName}
              <br />
              Start Price:{" "}
              {parseFloat(rider.startPrice).toLocaleString("sr-RS", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <br />
              Price Per KM:{" "}
              {parseFloat(rider.pricePerKm).toLocaleString("sr-RS", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <br />
              <button
                disabled={!destLatitude || !destLongitude}
                className="book-button"
                onClick={() => handleBookClick(rider)}
              >
                Book
              </button>
            </Popup>
          </Marker>
        ))}
        {latitude && longitude && (
          <Marker position={[latitude, longitude]} icon={userIcon}>
            <Popup>
              <strong>Your Location</strong>
            </Popup>
          </Marker>
        )}
        {destLatitude && destLongitude && (
          <Marker
            position={[destLatitude, destLongitude]}
            icon={destinationIcon}
          >
            <Popup>
              <strong>Selected destination</strong>
            </Popup>
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default FindRide;
