import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from '../data.json'
import '../sass/destination.scss'

export default function Destination() {
    const [destinations, setDestination] = useState(data.destinations)
    const [images, setImages] = useState(data.destinations.map((item) => item.images.png.slice(item.images.png.lastIndexOf('/'))))
    return(
        <main id="destination">
            <Container className="content">
                <Row>
                    <Col xs={12} lg={{offset: 1}}>
                        <p className="headText"><span>01</span> PICK YOUR DESTINATION</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={require("../assets/destination" + images[0])} alt={destinations[0].name} />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}