import React, { Component } from "react"

export default class NavBar extends React.Component{
    render(){
        return(
            <header className="header">
                <h4>Anime: Darling in the Franxx</h4>
                <a href="#">Character Detail</a>                        
                <a href="#">About</a>
            </header>
        )
    }
}