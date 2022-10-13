import { Container, Row, Col } from "react-bootstrap"
import data from '../data.json'
import '../sass/technology.scss'

export default function Technology() {
    const technology = data.technology
    const portrait = data.technology.map((item) => item.images.portrait.slice(item.images.portrait.lastIndexOf('/')))
    const landscape = data.technology.map((item) => item.images.landscape.slice(item.images.landscape.lastIndexOf('/')))

    return(
        <main id="technology">
            <Container className="content">
                <Row>
                    <Col>
                        <p className="headText"><span>03</span> SPACE  LAUNCH 101</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <p>THE TERMINOLOGY</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>{technology[0].name.toUpperCase()}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>{technology[0].description}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src={require("../assets/technology"+portrait[0])} alt={technology[0].name}/>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}