import React from "react";
import Data from "../../data/data.json"

export default class Selector extends React.Component{
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
            <div>
                <select onChange={(event)=>{this.change(event)}}> 
                    {Data.Characters.map((element) =>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                <h3>{this.state.pj.name}</h3>
                <img className='img' src={this.state.pj.photo}></img>
                <div>{this.state.pj.age}</div>
                <div>{this.state.pj.Gender}</div>
            </div>
        )
    }
}