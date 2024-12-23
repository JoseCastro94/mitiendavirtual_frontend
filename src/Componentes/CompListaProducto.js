import { Component } from "react";
import CompProductoResumen from "./CompProductoResumen";

class CompListaProducto extends Component{
    render(){
        return <div class="col-9">
        <p class="h5 text-secondary">Ropa</p>
                    <div class="row row-cols-1 row-cols-md-3">
                        {this.props.pListaProductos.map(lp=>
                            <CompProductoResumen pDatosDelProducto={lp} key={lp.id}/>
                        )}
                    </div>
        </div>
 
    }
}

export default CompListaProducto;