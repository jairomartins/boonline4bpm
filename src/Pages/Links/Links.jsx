import { Button, Col, Container, Row } from "react-bootstrap";
import CabecalhoBoletim from "../../components/Cabecalho/CabecalhoBoletim";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Links(){
    const navigate = useNavigate()     
    const handleClickVoltar = ()=>{
        navigate('/dashboard')
    }
    return(<>
       
        <CabecalhoBoletim texto={"Arquivos TCO-PM:"}/>
         <Container>
        <Row>
            <Col>
                <ul>
                    <li><a href="https://drive.google.com/file/d/1aX-DqQDNuyA89P9oeaUjYTCFNhWPSWoo/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Boletim</a></li>
                    <li><a href="https://drive.google.com/file/d/1sJbc2NjP0E8xSUXesDibhWMqALb-vbO_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Acidente de Trânsito</a></li>
                    <li><a href="https://drive.google.com/file/d/1sJbc2NjP0E8xSUXesDibhWMqALb-vbO_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Dos Envolvidos e dos Veículos</a></li>
                    <li><a href="https://drive.google.com/file/d/1ZA2aJDHE8gYSoKnCsJsBP7-T3RrEytEi/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Requisição de Exame de Dano </a></li>
                    <li><a href="https://drive.google.com/file/d/1mUGXyOiQll6NJPBhn95u_my6ok3PHt-9/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Requisição de Exame de Lesão Coporal </a></li>
                    <li><a href="https://drive.google.com/file/d/12RiPdit2sIcBuRamzWOHqWdFRvdq0eB7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Requisição de Laudo de constatação de Drogas </a></li>
                    <li><a href="https://drive.google.com/file/d/1Z4a42POUaC0dzsSQTsEUqWBpbjEm5QoB/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Termo de Manifestação do Ofendido e Compromisso de Comparecimento do Autor</a></li>
                    <li><a href="https://drive.google.com/file/d/1yodSSF3Ci4hXZ7tzw78YANw99pEm2bYA/view?usp=sharing" target="_blank" rel="noopener noreferrer">Termo de Apreensão e Deposito </a></li>
                    <li><a href="https://drive.google.com/drive/folders/1MS0_EPLNz0sjnAg_2hgssJhw1uy9dayl?usp=drive_link" target="_blank" rel="noopener noreferrer">Todos Arquivos</a></li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col  className="justify-content-md-center d-grid gap-2 mt-3">   
                <Button onClick={handleClickVoltar} variant="outline-primary" size="sm" > 
                <BsArrowLeft/>Voltar 
                </Button>   
            </Col>
        </Row>
        </Container>
        
    </>)
}