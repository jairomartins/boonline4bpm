import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Container, Form, Button, Alert } from "react-bootstrap";
import Cabecalho from "../../components/Cabecalho/Cabecalho";


function UserProfile() {
  const [userData, setUserData] = useState({});
  const [erroShow, setErroShow] = useState(false);
  const [erroMessagem, setErroMessagem] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const id = localStorage.getItem('x-user-mat-id')



  const API_PORT = process.env.REACT_APP_API_PORT;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // Fetch user data from the API on load
  useEffect(() => {
    async function fetchUserData() {
  
        axios.get(`http://${BASE_URL}:${API_PORT}/user/${id}`,{
            headers:{
                "x-access-token":localStorage.getItem("x-access-token")
            }
        })
        .then((response)=>{
            
            console.log(response)

            setUserData(response.data[0])

        }).catch(function (error) {
            console.error(error)
        })
        .then(function () {
            // sempre será executado
        });
    }
    fetchUserData();
  }, [BASE_URL, API_PORT, id]);

  // Handle form submission to update user data
async function handleUpdateProfile (e){   
    e.preventDefault()
    axios.put(`http://${BASE_URL}:${API_PORT}/users/${userData.userMatriculaId}`,{
        userName:userData.userName,
        userEmail:userData.userEmail,
        userPassword:userData.userPassword,
        userContato:userData.userContato,
        userMatriculaId: userData.userMatriculaId,
        tipo:userData.userTipo,
        userBarra:userData.userBarra,
        userGraduacao:userData.userGraduacao
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

  // Handle password change
  async function handleChangePassword(e) {
    e.preventDefault();
    const newPassword = prompt("Digite a nova senha:");

    if (newPassword) {
      setErroShow(false);
      setSuccessMessage("");

      try {
        const response = await axios.put(`http://${BASE_URL}:${API_PORT}/profile/password`, { userPassword: newPassword });
        setSuccessMessage(response.data.message || "Senha alterada com sucesso!");
      } catch (error) {
        setErroShow(true);
        setErroMessagem(error.response?.data?.message || "Erro ao alterar a senha.");
      } finally {

      }
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
                    disabled
                  />
                  <br />
                  <Form.Label>Graduação:</Form.Label>
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
      </Container>
    </>
  );
}

export default UserProfile;
