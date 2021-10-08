import React from "react";
import Data from "../../data/data.json"
import {useState, useEffect} from 'react';
import '../CharacterDetail/characterDetail.css'

export default function CharacterDetail(props){

    const [CharacterDetailInfo, setCharacterDetailInfo] = useState([]); //Hook

    useEffect(() => {
        setCharacterDetailInfo(Data.Characters)
    });

    const [CharacterSelected, setCharacterSelected] = useState(Data.Characters[0]); //Hook

    const change = (event) =>{
        //console.log(event.target.value)
        setCharacterSelected(CharacterDetailInfo.find((element) => {
            return element.name === event.target.value;
        }))
    }
//con el onChange capturo el evento y con el change me muestra como texto lo que estoy recibiendo    
        return(
            <div className="characterContainer">
                <select className="sel" onChange={(event)=>{change(event)}}> 
                    {Data.Characters.map((element) =>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                <h3>{`Nombre: ${CharacterSelected.name}`}</h3>
                <img className='imgCard' src={CharacterSelected.photo}></img>
                    <div>{`Codigo: ${CharacterSelected.code}`}</div>
                    <div>{`Edad: ${CharacterSelected.age}`}</div>                
                    <div>{`Genero: ${CharacterSelected.Gender}`}</div>
                    <div>{`Altura: ${CharacterSelected.Height}`}</div>
                    <div>{`Peso: ${CharacterSelected.Weight}`}</div>
                    <div>{`Alias: ${CharacterSelected.Alias}`}</div>
                    <div>{`Franxx: ${CharacterSelected.Franxx}`}</div>
            </div>
        )
    }