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
                    <Col xl={{offset: 1}}>
                        <p className="headText"><span>03</span> SPACE  LAUNCH 101</p>
                    </Col>
                </Row>
                <Row className="content-info">
                    <Col lg={{offset: 0, span: 2}} xxl={{offset: 1, span: 2}} className="tabs">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </Col>
                    <Col lg={4} xxl={{span: 5}} className="info">
                        <Row>
                            <Col>
                                <p className="title">THE TERMINOLOGY ...</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="heading">{technology[0].name.toUpperCase()}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={8}>
                                <p className="description">{technology[0].description}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} xxl={4} className="p-0 d-flex justify-content-end">
                        <img src={require("../assets/technology"+portrait[0])} alt={technology[0].name}/>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}