// Função de autenticação
async function authenticateUser(email, password) {
    try {
        const response = await axios.post(`${PROTOCOLO}://${BASE_URL}:${API_PORT}/login`, {
            userEmail: email,
            userPassword: password
        });

        const data = response.data;
        setAuthenticated(data.authenticated);
        localStorage.setItem("x-access-token", data.token);
        localStorage.setItem("x-user-mat-id", data.userID);
        localStorage.setItem("x-user-tipo", data.userTipo);

    } catch (error) {
        handleAuthenticationError(error);
    } finally {
        setIsLoading(false);
    }
}

// Função para tratar erros de autenticação
function handleAuthenticationError(error) {
    setErroMessage(error.response?.data?.message || "Erro ao autenticar.");
    setErroShow(true);
    console.error(error.response?.data);
}

export default{
    handleAuthenticationError,
    authenticateUser
}