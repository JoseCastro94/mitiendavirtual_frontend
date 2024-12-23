import React, {Component} from "react";

class CompCabecera extends Component {
    render() {
        return <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
            <span className="float-left">
                <a href="/" className="navbar-brand">
                    <img src="imagenes/nombre.png" width="250" height="35" alt="" />
                </a>
            </span>
            <span className="float-right">
                <div className="collapse navbar-collapse" id="navbarText">
                    <img src="imagenes/carritodecompra.png" width="32" height="32" alt="" />
                    <a className="text-danger" href="/">&nbsp;9 libros(s)</a>
                </div>
            </span>
        </div>
    </nav>

    }
}

export default CompCabecera;