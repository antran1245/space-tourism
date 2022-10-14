import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import data from '../data.json'
import '../sass/technology.scss'

export default function Technology() {
    const technology = data.technology
    const portrait = data.technology.map((item) => item.images.portrait.slice(item.images.portrait.lastIndexOf('/')))
    const landscape = data.technology.map((item) => item.images.landscape.slice(item.images.landscape.lastIndexOf('/')))
    const [tech, setTech] = useState(0)

    return(
        <main id="technology">
            <Container className="content pe-0">
                <Row>
                    <Col md={{offset: 1}}>
                        <p className="headText"><span>03</span> SPACE  LAUNCH 101</p>
                    </Col>
                </Row>
                {technology.map((item, index) => {
                    return <Row className={`content-info ${index===tech? '': 'd-none'}`} key={index}>
                        <Col xs={12} lg={6} xxl={4} className="p-0 d-flex d-lg-none justify-content-center">
                            <img className="landscape" src={require("../assets/technology"+landscape[index])} alt={item.name}/>
                        </Col>
                        <Col lg={{offset: 0, span: 2}} xxl={{offset: 1, span: 2}} className="tabs">
                            <div onClick={() => setTech(0)} className={`${tech === 0 && 'active'}`}>1</div>
                            <div onClick={() => setTech(1)} className={`${tech === 1 && 'active'}`}>2</div>
                            <div onClick={() => setTech(2)} className={`${tech === 2 && 'active'}`}>3</div>
                        </Col>
                        <Col lg={4} xxl={{span: 5}} className="info">
                            <Row>
                                <Col>
                                    <p className="title">THE TERMINOLOGY ...</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="heading">{item.name.toUpperCase()}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{offset: 2, span: 8}} md={{offset: 3, span: 6}} lg={{offset: 0, span: 10}} xxl={{offset: 0, span: 8}}>
                                    <p className="description">{item.description}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} xxl={4} className="p-0 d-none d-lg-flex justify-content-end">
                            <img src={require("../assets/technology"+portrait[index])} alt={item.name}/>
                        </Col>
                    </Row>
                })}
            </Container>
        </main>
    );
}