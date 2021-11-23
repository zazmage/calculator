import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [a, setA] = useState("");
  const [operacion, setOperacion] = useState("");

  const opera = (a, b) => {
    if (operacion) {
      if (operacion === "+") return parseFloat(a) + parseFloat(b);
      if (operacion === "-") return parseFloat(a) - parseFloat(b);
      if (operacion === "*") return parseFloat(a) * parseFloat(b);
      if (operacion === "/") return parseFloat(a) / parseFloat(b);
    }
  };

  const handleClick = ({ target }) => {
    if (!isNaN(target.innerText) || target.innerText === ".") {
      setDisplay(display + target.innerText);
    } else if (target.innerText === "+") {
      setA(display);
      setOperacion("+");
      setDisplay("");
    } else if (target.innerText === "-") {
      setA(display);
      setOperacion("-");
      setDisplay("");
    } else if (target.innerText === "*") {
      setA(display);
      setOperacion("*");
      setDisplay("");
    } else if (target.innerText === "/") {
      setA(display);
      setOperacion("/");
      setDisplay("");
    } else if (target.innerText === "=") {
      setDisplay(opera(a, display));
    } else if (target.innerText === "AC") {
      setDisplay("");
      setOperacion("");
      setA("");
    }
  };
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Form.Control
            type="text"
            value={display}
            placeholder="Calculadora!"
            readOnly
          />
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-danger" size="lg">
                AC
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-dark">
                /
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-dark">
                X
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                7
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                8
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                9
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-dark">
                -
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                4
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                5
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                6
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-dark">
                +
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                1
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                2
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                3
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-primary">
                =
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                0
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button onClick={handleClick} variant="outline-secondary">
                .
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
