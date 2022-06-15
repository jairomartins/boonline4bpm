import React from "react";
import { Button, Container, Row ,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight,BsArrowLeft } from "react-icons/bs"
const NavPage = ({prev,next}) => {
    return ( 
        <> 

            <br/>
            <br/>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Button  variant="outline-primary"><Link className="text-decoration-none" to={prev}><BsArrowLeft/> Voltar</Link></Button>
                        <br></br><br></br>
                    </Col>
                    
                    <Col  className="text-center">
                        <Button  variant="outline-primary"><Link className="text-decoration-none" to={next}>Próximo <BsArrowRight/></Link></Button> 
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
        </>
    )
}
 
export default NavPage;