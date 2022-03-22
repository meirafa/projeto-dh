import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HelmetProvider} from 'react-helmet-async';
import Cabecalho from "../pages/components/global/Cabecalho";
import Home from "../pages/Home";
import Frota from "../pages/Frota";
import Contato from "../pages/Contato";
import Reserva from "../pages/Reserva";
import Login from "../pages/Login";
import Termos from "../pages/Termos";
import CarDetails from "../pages/carros/CarDetails";
import Cadastro from "../pages/Cadastro";
import Rodape from "../pages/components/global/Rodape";
import Products from "../pages/components/Products";
import PageNotFound from "../pages/PageNotFound";
import CityFilter from '../pages/components/CityFilter';

function RouteList() {
    return (
        <>
            <BrowserRouter>
                <HelmetProvider>
                    <Cabecalho/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="categorias" element={<Products/>}/>
                        <Route path="contato" element={<Contato/>}/>
                        <Route path="reserva" element={<Reserva/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="termos" element={<Termos/>}/>
                        <Route path="produtos/:id" element={<CarDetails/>}/>
                        <Route path="cadastro" element={<Cadastro/>}/>
                        <Route path="categorias/:category" element={<Products/>}/>

                        {/* Teste com o CityFilter */}
                        <Route path="reserva/:city" element={<CityFilter/>}/>

                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                    <Rodape/>
                </HelmetProvider>
            </BrowserRouter>
        </>
    );
}

export default RouteList;