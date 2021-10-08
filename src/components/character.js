import { useParams } from "react-router";
import Card from "./Cards/card";
import Data from '../data/data.json'

export default function Character(){

    const params = useParams();
    const element = Data.Characters.find((element) =>{
        return element.code === params.code;
    })

    return (
        <>            
           <Card name={element.name + " " + element.code}
                 url={element.photo}/>
        </>
    )

}