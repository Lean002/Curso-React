import React from "react";
import Card from "./card";
import Data from "../../data/data.json"

export default class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className='container'>
            {Data.Characters.map((element) => (
                <Card
                    name={element.name + " " + element.code}
                    url={element.photo}
                />
            ))}                
            </div>
        )
    }
}