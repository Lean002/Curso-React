import React from "react";
import { NavLink } from "react-router-dom"
import Card from "../Cards/card";
import Data from '../../data/data.json'
import './home.css'

export default class Home extends React.Component{
    constructor(props){
        super()
        this.state = {
            pj : Data.Characters
        };
    }

    render(){
        return (
            <div className='container'>
            {this.state.pj.map((element) => (
            <NavLink to={`/charDetail/${element.code}`}>
                <Card
                    name={element.name + " " + element.code}
                    url={element.photo}
                />
            </NavLink>                
            ))}                
            </div>
        )
    }
}