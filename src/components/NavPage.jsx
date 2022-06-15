import React from "react";
import { Button, Container, Row ,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight,BsArrowLeft } from "react-icons/bs"
const NavPage = ({prev,next}) => {
    return ( 
        <>  <br></br>
            <Container>
                <Row>
                    <Col sm={4} className="text-center">
                        <Button  variant="outline-primary"><Link to={prev}> <BsArrowLeft/>Voltar</Link></Button>
                        <br></br><br></br>
                    </Col>
                    
                    <Col md={{ span: 4, offset: 4 }} className="text-center">
                        <Button  variant="outline-primary"><Link to={next}>Avançar <BsArrowRight/></Link></Button> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}
 
export default NavPage;