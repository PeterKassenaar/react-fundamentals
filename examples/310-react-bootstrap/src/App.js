import React from 'react';
import AlertComponent from "./Components/AlertComponent";
import {Col, Container, Row} from "react-bootstrap";
import CarouselComponent from "./Components/CarouselComponent";

// components


// App.js
function App() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <AlertComponent/>
                </Col>
                <Col md={6}>
                    <CarouselComponent/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
