import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Context } from "../Context/AuthContext";
import { BoletimProvider } from "../Context/BoletimContext";

import Home from "../Home/home";
import Header from "../components/Header/Header";
import Envolvidos from "../components/Envolvido/Envolvidos";
import ItensApreendidos from "../components/Material/ItensApreendidos";
import Efetivo from "../components/Efetivo/Efetivo";
import Historico from "../components/Historico/Historico";
import BoletimDetalhe from "../components/BoletimDetalhe/BoletimDetalhe";
import Page404 from "../components/Page404";

import RegisterUser from "../Pages/Usuarios/RegisterUser";
import LoginUser from "../Pages/Usuarios/LoginUser";
import Perfil from "../Pages/Usuarios/Perfil";
import EmailVerify from "../Pages/Usuarios/EmailVerify";
import PasswordRecover from "../Pages/Usuarios/PasswordRecover";

import Dashboard from "../Pages/Admin/Dashboard";
import DashboardUsuario from "../Pages/Admin/DashboardUsuario";
import DashboardBoletimp3 from "../Pages/Admin/DashboardBoletimp3";
import DashboardUsuarios from "../Pages/Admin/Usuarios/DashboardUsuarios";
import DashboardOcorrencias from "../Pages/Admin/Ocorrencias/DashboardOcorrencias";

import BoletimDetalheFromBD from "../Pages/Boletim/BoletimDetalheFromBD";

// -------------------------
// Rota privada genérica
// -------------------------
function PrivateRoute({ element, authenticated, tipo = null }) {
  const userTipo = localStorage.getItem("x-user-tipo");

  if (!authenticated) return <Home />;
  if (tipo && tipo !== userTipo) return <Home />;

  return element;
}

export default function Boletim() {
  const { authenticated, municipio } = useContext(Context);

  return (
    <BoletimProvider>
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Rotas de Boletim */}
          <Route path="/boletim">
            <Route
              path="header"
              element={
                <PrivateRoute
                  authenticated={authenticated}
                  element={<Header municipio={municipio} />}
                />
              }
            />
            <Route
              path="envolvido"
              element={<PrivateRoute authenticated={authenticated} element={<Envolvidos />} />}
            />
            <Route
              path="material"
              element={<PrivateRoute authenticated={authenticated} element={<ItensApreendidos />} />}
            />
            <Route
              path="efetivo"
              element={<PrivateRoute authenticated={authenticated} element={<Efetivo />} />}
            />
            <Route
              path="historico"
              element={<PrivateRoute authenticated={authenticated} element={<Historico />} />}
            />
            <Route
              path="VerBoletim"
              element={<PrivateRoute authenticated={authenticated} element={<BoletimDetalhe />} />}
            />
          </Route>

          {/* Área administrativa */}
          <Route path="/administrador">
            <Route
              path="usuarios"
              element={
                <PrivateRoute
                  authenticated={authenticated}
                  tipo="admin"
                  element={<DashboardUsuarios />}
                />
              }
            />
            <Route
              path="ocorrencias"
              element={
                <PrivateRoute
                  authenticated={authenticated}
                  tipo="admin"
                  element={<DashboardOcorrencias />}
                />
              }
            />
          </Route>

          {/* Usuários */}
          <Route path="/registro" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/emailverify" element={<EmailVerify />} />
          <Route path="/passwordrecover/:id" element={<PasswordRecover />} />
          <Route path="/perfil" element={<Perfil />} />

          {/* Dashboards */}
          <Route
            path="/dashboard"
            element={<PrivateRoute authenticated={authenticated} element={<Dashboard />} />}
          />
          <Route
            path="/dashboard/boletim"
            element={<PrivateRoute authenticated={authenticated} element={<DashboardBoletimp3 />} />}
          />
          <Route
            path="/dashboard/usuarios"
            element={<PrivateRoute authenticated={authenticated} element={<DashboardUsuario />} />}
          />

          {/* Outros */}
          <Route path="/BoFromBD" element={<BoletimDetalheFromBD />} />

          {/* 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </BoletimProvider>
  );
}
