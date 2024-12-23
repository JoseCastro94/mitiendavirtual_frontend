import React, { Component } from "react";

import CompCabecera from "./CompCabecera";

import CompFormularioAgregarCliente from "./CompFormularioAgregarCliente";

import CompPiePagina from "./CompPiePagina";

class PagePedidoCliente extends Component
{
    render(){
        return <div >
        <CompCabecera />
        <main role="main" className="container">      
            <CompFormularioAgregarCliente />
        </main>
        <CompPiePagina />
    </div>

    }
}

export default PagePedidoCliente;