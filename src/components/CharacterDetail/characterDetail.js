import React from "react";
import Data from "../../data/data.json"

export default class CharacterDetail extends React.Component{
    constructor(props){
        super()
        this.state = {
            pj : Data.Characters[0]
        };
    }

    change(event){
        //console.log(event.target.value)
        Data.Characters.map((element)=> {
            if(element.name===event.target.value){
                console.log(element.name)
                this.setState(()=>{
                    return {pj: element}
                })
            }
        })
    }
//con el onChange capturo el evento y con el change me muestra como texto lo que estoy recibiendo
    render(){
        return(
            <div className="characterContainer">
                <select className="sel" onChange={(event)=>{this.change(event)}}> 
                    {Data.Characters.map((element) =>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                <h3>{`Nombre: ${this.state.pj.name}`}</h3>
                <img className='imgCard' src={this.state.pj.photo}></img>
                    <div>{`Codigo: ${this.state.pj.code}`}</div>
                    <div>{`Edad: ${this.state.pj.age}`}</div>                
                    <div>{`Genero: ${this.state.pj.Gender}`}</div>
                    <div>{`Altura: ${this.state.pj.Height}`}</div>
                    <div>{`Peso: ${this.state.pj.Weight}`}</div>
                    <div>{`Alias: ${this.state.pj.Alias}`}</div>
                    <div>{`Franxx: ${this.state.pj.Franxx}`}</div>
            </div>
        )
    }
}