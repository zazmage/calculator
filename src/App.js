import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Form.Control
            type="text"
            placeholder="Readonly input here..."
            readOnly
          />
        </Row>
        <Row>
          <Col>
            <Button variant="outline-danger">AC</Button>
          </Col>
          <Col>
            <Button variant="outline-dark">/</Button>
          </Col>
          <Col>
            <Button variant="outline-dark">X</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-secondary">7</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">8</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">9</Button>
          </Col>
          <Col>
            <Button variant="outline-dark">-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-secondary">4</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">5</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">6</Button>
          </Col>
          <Col>
            <Button variant="outline-dark">+</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-secondary">1</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">2</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">3</Button>
          </Col>
          <Col>
            <Button variant="outline-primary">=</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-secondary">0</Button>
          </Col>
          <Col>
            <Button variant="outline-secondary">.</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
