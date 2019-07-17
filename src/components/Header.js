import React from 'react'
import { Link } from "gatsby"
import logo from '../../content/assets/logo.png'

const Header = () => {
    return (
        <section className="herosection">
            <Link to={'/'}><img src={logo} className="logo" alt="logo"/></Link>
            <h1 className="herotitle">Servicios de Consultoría en la Nube</h1>
            <h2 className="herosub">Mejorando tu negocio a través de herramientas y estrategias</h2>
            <Link to="/servicios" className="herocta">Conoce Más</Link>
            <div className="overlay"></div>
        </section>
    );
}

export default Header
