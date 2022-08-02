import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavUser = () => {
    return ( <>
         <Nav variant="tabs" className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link><Link to="/adm/registro">Registrar Usuário</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled><Link to="/adm/editarUsuario">Editar Usuario</Link></Nav.Link>
            </Nav.Item>
        </Nav>
    
    </> );
}
 
export default NavUser;