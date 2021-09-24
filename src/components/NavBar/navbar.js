import React, { Component } from "react"

export default class NavBar extends React.Component{
    render(){
        return(
            <header>
                <h1>Darling Aplication</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Character Detail</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}