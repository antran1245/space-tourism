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
                    <Col xxl={{offset: 1, span: 5}}>
                        <p className="headText"><span>02</span> MEET YOUR CREW</p>
                    </Col>
                </Row>
                <Row  className="d-flex justify-content-center align-items-center">
                    <Col xxl={{offset: 1, span: 5}} className="content-info">
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
                            <Col xxl={7} className="mt-4">
                                <p className="bio">{crew[0].bio}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="tabs">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6} className="image">
                        <img src={require("../assets/crew"+images[0])} alt={crew[0].name} />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}