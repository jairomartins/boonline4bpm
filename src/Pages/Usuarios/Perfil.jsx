import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Container, Form, Button, Alert } from "react-bootstrap";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";


function UserProfile() {
  const [idAntigo, setIdAntigo] = useState("");
  const [userData, setUserData] = useState({});
  const [erroShow, setErroShow] = useState(false);
  const [erroMessagem, setErroMessagem] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const id = localStorage.getItem('x-user-mat-id')

  const PROTOCOLO = process.env.REACT_APP_PROTOCOLO;
  const API_PORT = process.env.REACT_APP_API_PORT;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // Fetch user data from the API on load
  useEffect(() => {
    async function fetchUserData() {
  
        axios.get(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/users/${id}`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then((response)=>{
            console.log(response)
            setUserData(response.data[0])
            setIdAntigo(response.data[0].userMatriculaId) //guarda id antigo para fazer alteraçao se necessario
        }).catch(function (error) {
            console.error(error)
        })
        .then(function () {
            // sempre será executado
        });
    }
    fetchUserData();
  }, [BASE_URL, API_PORT, id, PROTOCOLO]);

  // Handle form submission to update user data
async function handleUpdateProfile (e){   
    e.preventDefault()
    axios.put(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/users/${idAntigo}`,{
        userMatriculaId:userData.userMatriculaId,
        userName:userData.userName,
        userEmail:userData.userEmail,
        userPassword:userData.userPassword,
        userContato:userData.userContato,
        tipo:userData.userTipo,
        userBarra:userData.userBarra,
        userGraduacao:userData.userGraduacao
    },{
        headers :{
            "x-access-token":localStorage.getItem("x-access-token")
        },
    })
    .then(function (response){
        localStorage.setItem("x-user-mat-id",userData.userMatriculaId) // atualiza o id do usuario
        alert("Perfil atualizado com sucesso!")

    }).catch(function(error){
        setErroMessagem("Erro ao atualizar perfil. Verifique os dados e tente novamente.");
        console.log(error)         

    })
}

  // Handle password change
  async function handleChangePassword(e) {
    e.preventDefault();
    const newPassword = prompt("Digite a nova senha:");

    if (newPassword) {
      setErroShow(false);
      setSuccessMessage("");

      e.preventDefault()
      console.log("editando senha")
      axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/recoverPassword/${userData._id}`,{
          userPassword:newPassword
      },{
          headers :{
              "x-access-token":localStorage.getItem("x-access-token")
          },
      })
      .then(function (response){
          console.log(response.data)

      }).catch(function(error){
          console.log(error)         

      })
    }

    
  }



  return (
    <>
      <Cabecalho texto={"Perfil do Usuário"} />

      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
            <Alert variant="danger" show={erroShow}>
              {erroMessagem}
            </Alert>
            <Alert variant="success" show={!!successMessage}>
              {successMessage}
            </Alert>

            <Card>
              <Card.Header className="text-center">
                <Card.Title>Gerenciar Perfil</Card.Title>
                {/* <LoadSpinner visible={isLoading} /> */}
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleUpdateProfile}>
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control
                    required
                    value={userData.userName || ""}
                    onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                  />
                  <br />
                  <Form.Label>Matrícula:</Form.Label>
                  <Form.Control
                    value={userData.userMatriculaId || ""}
                    onChange={(e) => setUserData({ ...userData, userMatriculaId: e.target.value })}
                  />
                  <br />
                  <Form.Label>Graduação/Posto:</Form.Label>
                  <Form.Control
                    value={userData.userGraduacao || ""}
                    onChange={(e) => setUserData({ ...userData, userGraduacao: e.target.value })}
                  />
                  <br />
                  <Form.Label>Número/Barra:</Form.Label>
                  <Form.Control
                    value={userData.userBarra || ""}
                    onChange={(e) => setUserData({ ...userData, userBarra: e.target.value })}
                  />

                  <br />
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    value={userData.userEmail || ""}
                    onChange={(e) => setUserData({ ...userData, userEmail: e.target.value })}
                  />
                  <br />
                  <Form.Label>Contato:</Form.Label>
                  <Form.Control
                    value={userData.userContato || ""}
                    onChange={(e) => setUserData({ ...userData, userContato: e.target.value })}
                  />
                  <br />
                  
                 
                  <Button variant="success" type="submit">
                    Salvar Alterações
                  </Button>
                  <Button variant="danger" className="ms-2" onClick={handleChangePassword}>
                    Alterar Senha
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
        <br />
        <Row>
          <Col className="text-center">
            <Button  variant="outline-primary"><Link className="text-decoration-none" to="/dashboard"><BsArrowLeft/> Voltar</Link></Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserProfile;
