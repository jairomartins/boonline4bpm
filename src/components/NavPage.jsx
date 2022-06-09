import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavPage = ({prev,next}) => {
    return ( 
        <>  <br></br>
            <Row className="d-grid gap-2">
                <Button  variant="outline-primary"><Link to={prev}>Voltar</Link></Button>
    
            </Row>
            <br></br>
            <Row>
                <Button  variant="outline-primary"><Link to={next}>Avançar</Link></Button>    
            </Row>
        </>
    )
}
 
export default NavPage;