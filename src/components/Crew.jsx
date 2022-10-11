import { Container, Row, Col } from "react-bootstrap"
import data from '../data.json'
import '../sass/crew.scss'

export default function Crew() {
    const crew = data.crew
    const images = data.crew.map((item) => item.images.png.slice(item.images.png.lastIndexOf('/')))
    return(
        <main id="crew">
            <Container className="content">
                <Row>
                    <Col xs={{offset: 1, span:10}} lg={{offset:1, span:5}} xl={{offset: 1, span: 5}}>
                        <p className="headText"><span>02</span> MEET YOUR CREW</p>
                    </Col>
                </Row>
                <Row className="d-flex  align-items-center">
                    <Col xs={12} lg={{offset: 1, span:4}} xl={{offset: 1, span: 5}} className="content-info">
                        <Row>
                            <Col>
                                <p className="title">{crew[0].role.toUpperCase()}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>{crew[0].name.toUpperCase()}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{offset: 3, span: 6}} lg={{offset:0, span: 12}} xl={7} className="mt-sm-4">
                                <p className="bio">{crew[0].bio}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-2 mt-lg-4">
                                <div className="tabs">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={{offset: 1, span: 5}} xl={4} className="image d-flex justify-content-center">
                        <img src={require("../assets/crew"+images[0])} alt={crew[0].name} />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}