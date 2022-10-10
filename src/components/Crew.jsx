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
                        <Row>
                            <Col>
                                <p className="headText"><span>02</span> MEET YOUR CREW</p>
                            </Col>
                        </Row>
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
                            <Col>
                                <p>{crew[0].bio}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6}>
                        <img src={require("../assets/crew"+images[0])} alt={crew[0].name} />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}