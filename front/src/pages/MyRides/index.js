import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Container, Header } from "semantic-ui-react";
import { getCompletedRides } from "../../actions/rideActions";
import "./drivingHistory.css";

const DrivingHistory = () => {
  const dispatch = useDispatch();
  const { completedRides } = useSelector((state) => state.ride);

  useEffect(() => {
    dispatch(getCompletedRides());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="driving-history-container">
      <Header as="h1">Driving History</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Start Location</Table.HeaderCell>
            <Table.HeaderCell>End Location</Table.HeaderCell>
            <Table.HeaderCell>Total Price</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Driver</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {completedRides.map((ride) => (
            <Table.Row key={ride.id}>
              <Table.Cell>
                {ride.startLocationLatitude}, {ride.startLocationLongitude}
              </Table.Cell>
              <Table.Cell>
                {ride.endLocationLatitude}, {ride.endLocationLongitude}
              </Table.Cell>
              <Table.Cell>{ride.totalPrice}</Table.Cell>
              <Table.Cell>{ride.status}</Table.Cell>
              <Table.Cell>
                {ride.user.firstName} {ride.user.lastName}
              </Table.Cell>
              <Table.Cell>
                {ride.driver.firstName} {ride.driver.lastName}
              </Table.Cell>
              <Table.Cell>
                {ride.rating && (
                  <>
                    {ride.rating.value} stars - {ride.rating.comment}
                  </>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default DrivingHistory;
