
import { Container, Row, Col } from "react-bootstrap";

import logo from '../media/m500.svg';
import '../css/Inicio.css'

export const Inicio = () => {
    
    return(
        <section id="home">
            <Container className="banner">
                <Row>
                    <Col  xl={12} >
                        <img src={logo} className="logo" alt="logo" />
                    </Col>           
                    <Col  xl={12} >
                        <h1 ><span >{'Aplicación para administrar de redes sociales '} </span></h1>
                        <h3>Maguey 500</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}