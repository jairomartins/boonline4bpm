import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import './DashboardButton.css'

const DashBoardButton = (props) => {
    return ( 
        < >
            <div >
                <Link className="dashboard-link"  to={props.linkTo}> 
                <Button variant={props.variant} className="dashboard-button">
                   {props.label}
                </Button>
                </Link> 
            </div>
        </> 
    );
}
 
export default DashBoardButton;