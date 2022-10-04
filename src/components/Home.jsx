import { Col, Container, Row } from 'react-bootstrap'
import '../sass/home.scss'

export default function Home() {
    return(
        <Container fluid id="home">
            <Row className='content d-flex justify-content-center justify-content-lg-evenly align-items-center'>
                <Col xs={10} sm={6} lg={{offset: 1, span: 3}} className="content-col">
                    <Row>
                        <p className='headText'>SO, YOU WANT TO TRAVEL TO</p>
                    </Row>
                    <Row>
                        <h1>SPACE</h1>
                    </Row>
                    <Row>
                        <p className='info'>
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </Row>
                </Col>
                <Col xs={12} lg={{offset: 3, span: 3}} className="content-col">
                    <div className='circleExplore'>EXPLORE</div>
                </Col>
            </Row>
        </Container>
    );
}