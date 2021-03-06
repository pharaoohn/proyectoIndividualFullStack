import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"


function ContLog () {
    const [sendEmailLog, setDataToEmailLog] = useState("");
    const [sendPassLog, setDataToPassLog] = useState("");
    const [sendIdUser, setDataIdUser] = useState("");
    const navigate = useNavigate()
    const LogData = () => {
        
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({userLog: sendEmailLog,
                                passLog: sendPassLog})
        };
    
        fetch("login", requestOptions)
          .then((response) => response.json())
          .then((res)=> setDataIdUser(res.id))
          if(sendIdUser){
            navigate("/")
            window.location.reload()
            let test = document.getElementById('contLog');
            if (test.style.display == 'block') {
          test.style.display = 'none';
          } else {
          test.style.display = 'block'
          }
            
            localStorage.setItem("idUser",sendIdUser );
            let car = []
            localStorage.setItem("Carrito", JSON.stringify(car));
          }
          
      }  
    return(
        <section className="contLog" id="contLog">
        <div className="contLogBox">
            <div className="logBox">
                <h1 className="logHTex">Acceder</h1>
                
                {/* <p className="logPText">Full access to in any of our products</p> */}
            </div>
            <div className="inpBu" action="/login" method="post">
            <input className="userLog" id="userLog" onChange={(e) => setDataToEmailLog(e.target.value)}  type="text" name="userLog" placeholder="Introduce tu Email" required="" />
            <input className="passLog" onChange={(e) => setDataToPassLog(e.target.value)} id="passLog" type="password" name="passLog" placeholder="Introduce tu contraseña" required="" />
            <div id="passRec" >
            <Link to={"/recPass"}>Recuperar Contraseña</Link>
            </div>
            <input className="botonLog" onClick={() => LogData()} id="botonLog" type="button" value="Acceder" />
            </div>
        </div>
    </section>
    )
}

export default ContLog;