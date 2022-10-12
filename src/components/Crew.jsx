import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import data from '../data.json'
import '../sass/crew.scss'

export default function Crew() {
    const crew = data.crew
    const images = data.crew.map((item) => item.images.png.slice(item.images.png.lastIndexOf('/')))
    const [member, setMember] = useState(0)
    return(
        <main id="crew">
            <Container className="content">
                <Row>
                    <Col xs={{span:12}} sm={{offset: 1 , span: 11}} lg={{offset:1, span:5}} xl={{offset: 1, span: 5}} className="d-flex justify-content-center justify-content-sm-start">
                        <p className="headText"><span>02</span> MEET YOUR CREW</p>
                    </Col>
                </Row>
                {crew.map((item, index) => {
                    return <Row className={`${member === index? 'd-flex': 'd-none'} align-items-center order-view`} key={index}>
                        <Col xs={12} lg={{offset: 1, span:4}} xl={{offset: 1, span: 6}} className="content-info">
                            <Row>
                                <Col>
                                    <p className="title">{item.role.toUpperCase()}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1>{item.name.toUpperCase()}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{offset: 2, span: 8}} sm={{offset: 2, span: 8}} lg={{offset:0, span: 12}} xl={10} className="mt-sm-4">
                                    <p className="bio">{item.bio}</p>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-start">
                                <Col xs={12} className="d-flex justify-content-center justify-content-md-start mt-2 mt-lg-4">
                                    <div className="tabs">
                                        <span className={`${index === 0? 'active': ''}`} onClick={() => setMember(0)}/>
                                        <span className={`${index === 1? 'active': ''}`} onClick={() => setMember(1)}/>
                                        <span className={`${index === 2? 'active': ''}`} onClick={() => setMember(2)}/>
                                        <span className={`${index === 3? 'active': ''}`} onClick={() => setMember(3)}/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={{span:8, offset: 0}} sm={12} lg={{offset: 1, span: 5}} xl={1} className="image d-flex justify-content-center image">
                            <img src={require("../assets/crew"+images[index])} alt={item.name} />
                        </Col>
                    </Row>
                })}
            </Container>
        </main>
    )
}