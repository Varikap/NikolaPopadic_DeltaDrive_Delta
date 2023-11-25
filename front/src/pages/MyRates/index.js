import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Header, Container, Icon } from "semantic-ui-react";
import { getRates } from "../../actions/rideActions";

const RatesTable = () => {
  const dispatch = useDispatch();
  const { rates } = useSelector((state) => state.ride);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getRates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Rates Table
      </Header>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Driver Name</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
            <Table.HeaderCell>Comment</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rates.map((rate) => (
            <Table.Row key={rate.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Icon name="user circle" />
                  <Header.Content>
                    {rate.driver.firstName} {rate.driver.lastName}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{rate.value}</Table.Cell>
              <Table.Cell>{rate.comment}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default RatesTable;
