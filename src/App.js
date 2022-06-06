import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';
import Efetivo from './components/Efetivo/Efetivo';
import Envolvidos from './components/Envolvido/Envolvidos';
// import EnderecoBo from './components/Endereco/EnderecoBo'
import Home from './components/home/home';
import Header from './components/Cabecalho/Header'
// import ItensApreendidos from './components/Material/ItensApreendidos';


// import CabecalhoBo from './components/Cabecalho/CabecalhoBo';

function App() {
  return (
<>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="header" element={<Header/>} />
        <Route path="envolvido" element={<Envolvidos/>} />
        <Route path="efetivo" element={<Efetivo/>} />
        {/* <Route path="imprimir" element={<PdfView/>} /> */}
      </Routes>
  </BrowserRouter>

      {/* <Home/>
      <Header/> */}
      {/* <EnderecoBo/> */}
      {/* <Envolvido/> */}
      {/* <ItensApreendidos/> */}
      {/* <Efetivo/>  */}
    </>   
  );
}

export default App;
