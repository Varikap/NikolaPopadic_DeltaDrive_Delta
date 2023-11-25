import React, { useEffect, useState, useRef } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LatLon from "geodesy/latlon-nvector-spherical";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { completeRide } from "../../actions/rideActions";

const RoutingMap = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, destLatitude, destLongitude, ride } = history.location.state;
  const [route, setRoute] = useState([]);
  const userMarkerRef = useRef(null);
  const destinationRef = useRef(null);

  useEffect(() => {
    const updateMarkerPositions = (coordinates) => {
      const speed = 60; // Speed in km/h
      const elapsedTime = 5; // Elapsed time in seconds (adjust as needed)
      const distance = (speed * elapsedTime) / 60; // Distance in km

      const userLatLng = L.latLng(user.latitude, user.longitude);
      const userLocation = new LatLon(user.latitude, user.longitude);

      // Find the index of the coordinate closest to the user's current location
      const startIndex = coordinates.findIndex(
        (coord) => userLatLng.distanceTo(L.latLng(coord[1], coord[0])) < 10
      );

      // Extract coordinates from the route data starting from the identified index
      const remainingCoordinates = coordinates.slice(startIndex);

      let nextPoint = null;

      // Find the next point that is at least the calculated distance away from the user
      for (const coord of remainingCoordinates) {
        if (L.latLng(coord[1], coord[0]).distanceTo(userLatLng) >= distance) {
          nextPoint = coord;
          break;
        }
      }

      if (nextPoint) {
        // Calculate bearing between user's current location and the next point
        const bearing = userLocation.initialBearingTo(
          new LatLon(nextPoint[1], nextPoint[0])
        );

        // Update marker positions based on the next point
        const newLocation = userLocation.destinationPoint(
          distance * 1000,
          bearing
        );
        const newUserLatLng = L.latLng(newLocation.lat, newLocation.lon);

        userMarkerRef.current.leafletElement.setLatLng(newUserLatLng);
        destinationRef.current.leafletElement.setLatLng([
          nextPoint[1],
          nextPoint[0],
        ]);

        // Check if the new location is close enough to the destination
        if (
          newLocation.distanceTo(new LatLon(destLatitude, destLongitude)) <
          distance * 1000
        ) {
          dispatch(completeRide(ride.id));
        }
      } else {
        // If no suitable next point is found, set markers to the destination
        userMarkerRef.current.leafletElement.setLatLng(userLatLng);
        destinationRef.current.leafletElement.setLatLng([
          destLatitude,
          destLongitude,
        ]);
      }
    };

    const fetchRoute = async () => {
      try {
        const response = await fetch(
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.REACT_APP_OPEN_ROUTE_TOKEN}&start=${user.longitude},${user.latitude}&end=${destLongitude},${destLatitude}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch route");
        }

        const routeData = await response.json();
        const coordinates = routeData.features[0].geometry.coordinates;

        setRoute(coordinates);
        updateMarkerPositions(coordinates);
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    const intervalId = setInterval(fetchRoute, 5000); // Adjusted interval time

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.latitude, user.longitude, destLatitude, destLongitude]);

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

  return (
    <Map
      center={[user.latitude, user.longitude]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />

      <Marker
        position={[user.latitude, user.longitude]}
        icon={userIcon}
        ref={userMarkerRef}
      >
        <Popup>Your Location</Popup>
      </Marker>

      <Marker
        position={[destLatitude, destLongitude]}
        icon={driverIcon}
        ref={destinationRef}
      ></Marker>

      {route.length > 0 && <Polyline positions={route} color="blue" />}
    </Map>
  );
};

export default RoutingMap;
