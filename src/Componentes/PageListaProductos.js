import { Component } from "react";
import CompCabecera from "./CompCabecera";
import CompListaCategorias from "./CompListaCategorias";
import CompListaProducto from "./CompListaProducto";
import CompPiePagina from "./CompPiePagina";
import dataJsonListaProductos from "../DataJson/dataJsonListaProductos.json";

class PageListaProducto extends Component{
    render() {
        return <div >
        <CompCabecera/>
        <main role="main" className="container">      
            <div className="row">
                <CompListaCategorias />
                <CompListaProducto pListaProductos={dataJsonListaProductos}/>
            </div>
        </main>
        <CompPiePagina />
    </div>

    }
}

export default PageListaProducto;
