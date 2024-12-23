import React,{Component} from "react";
import CompCabecera from "./CompCabecera";
import CompListaCategorias from "./CompListaCategorias";
import CompPedidoDetalle from "./CompPedidoDetalle";
import CompPiePagina from "./CompPiePagina";


import dataJsonPedido from "../DataJson/dataJsonPedido.json";
import dataJsonListaDetallePedido from "../DataJson/dataJsonListaDetallePedido.json";

class PagePedidoDetalle extends Component
{
    state={
        miPedido: dataJsonPedido,
        miPedidoDetalle: dataJsonListaDetallePedido
    }

    agregarProductoAlPedido = (pId, pProducto, pMarca, pPrecio, pCantidad)=>
    {
        console.log(pProducto);
        const nuevoItemDetalle = {
            "id": pId,
           "idPedido": 385,
           "idProducto": 0,
           "cantidad": pCantidad,
           "precioUnitario": pPrecio,
           "subTotal": pCantidad * pPrecio,
           "producto": {
               "id": 0,
               "idCategoria": 0,
               "idMarca": 0,
               "nombre": pProducto,
               "precio": pPrecio,
               "categoria": {
                   "id": 0,
                   "nombre": ""
               },
               "marca": {
                   "id": 0,
                   "nombre": pMarca
               }
           }

        };

        let nuevoPedidoDetalle = [...this.state.miPedidoDetalle, nuevoItemDetalle]
        this.setState({
            miPedidoDetalle: nuevoPedidoDetalle
        })

        this.recalcularTotal(nuevoPedidoDetalle);

    }

    eliminarProductoDelPedido=(id)=>{
        let nuevoPedidoDetalle = this.state.miPedidoDetalle.filter(itemDetalle => itemDetalle.id !== id);
        this.setState({
            miPedidoDetalle: nuevoPedidoDetalle
        });
        this.recalcularTotal(nuevoPedidoDetalle);
    }


        //recalcular el total del pedido 
        recalcularTotal=(pDetalle)=> {
        let total = 0;
        let Pedido = this.state.miPedido;
        pDetalle.map(itemDetalle => total = total + itemDetalle.subTotal);
        Pedido.total = total;
        this.setState({
            miPedido: Pedido
        })
    }

    render(){
        return<div>
        <CompCabecera/>
        <main role ="main" className="container">
            <div className="row">
                <CompListaCategorias/>
                <CompPedidoDetalle pPedido = {this.state.miPedido} pPedidoDetalle={this.state.miPedidoDetalle} pFuncionEliminarProducto={this.eliminarProductoDelPedido} pFuncionAgregarProducto={this.agregarProductoAlPedido} />
            </div>
        </main>
        <CompPiePagina/>
    </div>


    }
}

export default PagePedidoDetalle;