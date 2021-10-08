import React from "react";
import './about.css'
import { useState } from "react";

//export default class About extends React.Component    
    export default function About(){

        const [state, setState] = useState({ //seteo los estados
            email: '',
            asunto: '',
            consulta: ''
        })

        const [fails, setFails] = useState({
            email: 'Debe ingresar un email valido',
            asunto: 'El campo no debe estar vacio',
            consulta: 'El campo no debe estar vacio'
        })

        function onHandleChange(e){ //seteo el onHandleChange
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
            
            setFails(
                validacion({
                    ...state, 
                    [e.target.name]: e.target.value
                })
            )
        }

    //Seteamos los callbacks onChange
       return(
            <about>
                <div className='contact'>
                    <div className='superMargen'>
                        
                    <div className='margen'>            
                        <label for="email">Correo: </label>
                        <input type="email" id="email" 
                        name='email' onChange={(e) => onHandleChange(e)} placeholder='Ingrese su email' pattern=".+@globex\.com" size="30" required>
                        </input>                       
                    </div>
                    <div className='margen'>
                            {fails.email}
                    </div>
                    <div className='margen'>
                        <label for="asunto">Asunto: </label>
                        <input id='asunto' name='asunto' placeholder="Ingrese el asunto a tratar" onChange={(e) => onHandleChange(e)}></input>                        
                    </div>
                    <div className='margen'>
                            {fails.asunto}
                    </div>
                    <div className='margen'>                    
                        <textarea id="consulta" name='consulta' cols="50" rows='20' placeholder='Ingrese su mensaje' onChange={(e) => onHandleChange(e)}></textarea>                        
                    </div>
                    <div className='margen'>
                        {fails.consulta}
                    </div>
                    <button type="submit" className="button" disabled={fails.email || fails.asunto || fails.consulta}>
                        Enviar
                    </button>
                    </div>                
                </div>
                <div className="about">
                <h4>Creado por:</h4>
                <div>Leandro Carello</div>
                <h4>Email de Contacto:</h4>
                <div>leandro_carello@outlook.com</div>
                <h4>Universidad Nacional de Jujuy</h4>
                </div>
            </about>
        )
    }

function validacion(input){
        let errors = {}
        if(!input.email){
            errors.email = "Debes ingresar algo"
        } else if(!/\S+@\S+\.\S+/.test(input.email)){
            errors.email = "Debes ingresar un email valido"
        }
        if(!input.asunto){
            errors.asunto = "Debes ingresar el asunto"
        } else if(input.asunto.length < 10){
            errors.asunto = "Debe tener mas de 10 caracteres"
        }
        if(!input.consulta){
            errors.consulta = "Debes ingresar la consulta"
        } else if(input.consulta.length > 256){
            errors.consulta = "Debe tener menos de 256 caracteres"
        }
        return errors;
}