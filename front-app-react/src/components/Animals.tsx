import React from "react";
import { animal } from "../interfaces/interfaces";
import Animal from "./Animal"
import Card from "./UI/Card";

interface props {
    items: animal[],
    onDelete: (id:number) => void
}

const Animals : React.FC<props> = ({items, onDelete}) =>  {

    return (
        <>
        <div className="flex justify-start flex-wrap">        
            {items.map((animal: animal) =>
            <div key={animal.animalId}>
                <Animal animal={animal}/>
                <a onClick={() => onDelete(parseInt(animal.animalId))}><img src="trash-alt.svg" className="ml-9 h-6 w-6 "></img></a>
            </div>
            )}
        </div>

        </>

    );
}

export default Animals