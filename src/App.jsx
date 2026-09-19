import React from "react";
import AddExpense from "./components/AddExpense";
import ListExpense from "./components/ListExpense";
import { Container, Row, Col, Card } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container className="py-4 text-center">
        <h1 className="fw-bold">Expense Tracker</h1>
      </Container>

      <Container className="pb-5">
        <Row className="g-4">
          <Col xs={12} lg={4}>
            <Card className="h-100">
              <Card.Header className="bg-primary text-white">
                Add Expense
              </Card.Header>
              <Card.Body>
                <AddExpense />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={8}>
            <Card className="shadow-sm">
              <Card.Header className="bg-success text-white">
                Expense List
              </Card.Header>
              <Card.Body>
                <ListExpense />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
