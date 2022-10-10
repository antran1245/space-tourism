import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from '../data.json'
import '../sass/destination.scss'

export default function Destination() {
    const destinations = data.destinations
    const [location, setLocation] = useState(0)
    // parse the image name with a / at the beginning to deal with webpack error
    const images = data.destinations.map((item) => item.images.png.slice(item.images.png.lastIndexOf('/')))
    return(
        <main id="destination">
            <Container className="content">
                <Row>
                    <Col xs={12} lg={{offset: 1, span: 10}}>
                        <p className="headText"><span>01</span> PICK YOUR DESTINATION</p>
                    </Col>
                </Row>

                {/* Change in location based on selected destination */}
                {destinations.map((item, index) => {
                    return <Row className={`${index === location? 'd-flex' : 'd-none'} justify-content-center mt-2 mt-lg-5`} key={index}>
                        <Col xs={12} lg={{offset: 1, span: 6}} className="d-flex justify-content-center">
                            <img src={require("../assets/destination" + images[index])} alt={item.name}/>
                        </Col>
                        <Col className="content-info">
                            <Row>
                                <Col xs={12} lg={6} className="d-flex mt-4 mt-xxl-0">
                                    <div className="tabs d-flex">
                                        <p onClick={() => setLocation(0)} className={`${index===0 && 'active'}`}>MOON</p>
                                        <p onClick={() => setLocation(1)} className={`${index===1 && 'active'}`}>MARS</p>
                                        <p onClick={() => setLocation(2)} className={`${index===2 && 'active'}`}>EUROPA</p>
                                        <p onClick={() => setLocation(3)} className={`${index===3 && 'active'}`}>TITAN</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={12} className="mt-3">
                                    <h1>{item.name.toUpperCase()}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9} md={8} lg={8} xxl={6}>
                                    <p className="description">{item.description}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={9} md={8} lg={9} xxl={6} className="distance-travel d-flex align-items-end mt-4 mt-xxl-5">
                                    <Col xs={12} sm={6} lg={7} xl={8}>
                                        <Row>
                                            <Col>
                                                <p className="distance-text">AVG. DISTANCE</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="distance">{item.distance.toUpperCase()}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={6} lg={7} xl={8}>
                                        <Row>
                                            <Col>
                                                <p className="travel-text">EST. TRAVEL TIME</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="travel">{item.travel.toUpperCase()}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                })}
            </Container>
        </main>
    );
}