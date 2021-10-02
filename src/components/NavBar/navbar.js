import React, { Component } from "react"
import { Link, NavLink} from "react-router-dom"

export default class NavBar extends React.Component{
    render(){
        return(
            <header className="header">
                <NavLink to='/'><h4>Anime: Darling in the Franxx</h4></NavLink>
                <NavLink to='/charDetail'>Character Detail</NavLink>                        
                <NavLink to='/about'>About</NavLink>
            </header>
        )
    }
}