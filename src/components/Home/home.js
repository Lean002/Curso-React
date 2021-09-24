import React from "react";
import Card from "./card";
import Selector from "../Home/selector";
import Data from "../../data/data.json"

export default class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <>
            {Data.Characters.map((element) => (
                <Card
                    name={element.name + " " + element.code}
                    url={element.photo}
                />
            ))}                
            </>
        )
    }
}