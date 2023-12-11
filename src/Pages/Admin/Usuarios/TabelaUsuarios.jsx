import { Button, Table } from "react-bootstrap";

const TabelaUsuarios = ({ usuarioList, handleClickEditarUsuario, handleClickRemoverUsuario }) => {

    if (!usuarioList || usuarioList.length === 0) {
        return null; // Se usuarioList for vazio ou não existir, não renderiza a tabela
    }
    return (
        <>
        <Table striped> 
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Tipo de Usuário</th>
                    <th>Mat/ID</th>
                    <th>Opção</th>
                </tr>
            </thead>
            <tbody>
                {usuarioList?.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.userName}</td>
                        <td>{usuario.userEmail}</td>
                        <td>{usuario.tipo}</td>
                        <td>{usuario.userMatriculaId}</td>
                        <td>
                            <Button className="mb-2" onClick={() => handleClickEditarUsuario(usuario.id)}>
                                Editar
                            </Button>
                            {" "}
                            <Button className="mb-2" onClick={() => handleClickRemoverUsuario(usuario.id)}>
                                Remover
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
};

export default TabelaUsuarios;