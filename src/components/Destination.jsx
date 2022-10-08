import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from '../data.json'
import '../sass/destination.scss'

export default function Destination() {
    const [destinations, setDestination] = useState(data.destinations)
    // parse the image name with a / at the beginning to deal with webpack error
    const [images, setImages] = useState(data.destinations.map((item) => item.images.png.slice(item.images.png.lastIndexOf('/'))))
    return(
        <main id="destination">
            <Container className="content">
                <Row>
                    <Col xs={12} lg={{offset: 1, span: 3}}>
                        <p className="headText"><span>01</span> PICK YOUR DESTINATION</p>
                    </Col>
                </Row>

                {/* Change in location based on selected destination */}
                <Row className="d-flex justify-content-center">
                    <Col lg={{offset: 1, span: 4}} className="d-flex justify-content-center">
                        <img src={require("../assets/destination" + images[0])} alt={destinations[0].name}/>
                    </Col>
                    <Col className="content-info">
                        <Row>
                            <Col lg={5} className="d-flex">
                                <div className="tabs d-flex">
                                    <p>MOON</p>
                                    <p>MARS</p>
                                    <p>EUROPA</p>
                                    <p>TITAN</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5}>
                                <h1>{destinations[0].name.toUpperCase()}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5}>
                                <p className="description">{destinations[0].description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5}>
                                <hr/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5} className="d-flex">
                                <Col>
                                    <Row>
                                        <Col>
                                            <p className="distance-text">AVG. DISTANCE</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="distance">{destinations[0].distance.toUpperCase()}</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <p className="travel-text">EST. TRAVEL TIME</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="travel">{destinations[0].travel.toUpperCase()}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}