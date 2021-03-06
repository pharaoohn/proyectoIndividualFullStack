// import {Link} from "react-router-dom"

import { useState, useEffect, useContext } from "react";
import React from "react";
import PrendasContext from "../context/context";




function BtnPrenda(props) {
  // const[name, setName] = useState("Prendas")
  const [typeView, setTypeView] = useState("Prendas");
  const title = useContext(PrendasContext) //usamos el useContext para crear el contexto titulo 

  
  useEffect(() => {
    title.setName(typeView)
    })
    
  return (
    
    <div>
     
        
      
        <button
          className="btn"
          onClick={() => setTypeView("Prendas")}
          id="prenView"
        >
          Prendas
        </button>

           <button
          className="btn"
          onClick={() => setTypeView("Bisuteria")}
          id="prenView"
        >
          Bisuteria
        </button>
        
    </div>
    
  );
}
export default BtnPrenda;



