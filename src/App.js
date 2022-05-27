// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Envolvido from './components/Envolvido/Envolvido';
import EnderecoBo from './components/Endereco/EnderecoBo'
import Home from './components/home/home';
import Header from './components/Cabecalho/Header'


// import CabecalhoBo from './components/Cabecalho/CabecalhoBo';

function App() {
  return (
    <>
    <Home/>
    <Header/>
    <EnderecoBo/>
    <Envolvido/>
    </>   
  );
}

export default App;
