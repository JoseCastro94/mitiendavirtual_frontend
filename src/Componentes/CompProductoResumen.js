import { Component } from "react";

class CompProductoResumen extends Component{
    render(){
        var urlImagen = "imagenes/" + this.props.pDatosDelProducto.url;
        var urlProducto = "Producto" + this.props.pDatosDelProducto.id;
        return <div class="col mb-4">
        <div class="card h-100">
            <a href="producto/1">
                <img src={urlImagen} class="card-img-top" alt="..."/>
            </a>
            <div class="card-body">
                <a class="text-primary" href={urlProducto}>
                    <h5 class="card-title">{this.props.pDatosDelProducto.nombre}</h5>
                </a>
                <p class="card-text">{this.props.pDatosDelProducto.descripcion}</p>
                <p class="text-primary">{this.props.pDatosDelProducto.precio}</p>
            </div>
        </div>
    </div>

    }
}

export default CompProductoResumen;