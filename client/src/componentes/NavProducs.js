import React, { useState, useEffect } from "react";
import logo from "../componentes/images/dobermanLOGO.jpg"
import {Link} from "react-router-dom"

function NavProducts () {


   
    return(

        <div className="navProducs">
        <nav className="nav">
          <div className="divLogo">
          <img className="logo"src = {logo} alt=""/>
          </div>
          <div>
          <button id="homeBtn"> <Link to={"/"}>Home</Link></button>
          </div>
        <div className="divLogin">
                
                <input className="sing" id="sing" type="submit" value="Carrito" />
            </div>
        </nav>
    </div>
        
    )
}

export default NavProducts;