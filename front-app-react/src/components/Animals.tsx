import React from "react";
import { animal } from "../interfaces/interfaces";
import Animal from "./Animal"
import Card from "./UI/Card";

interface props {
    items: animal[]
}

const Animals : React.FC<props> = ({items}) =>  {

    return (
        <div className="flex justify-start flex-wrap">        
            {items.map((animal: animal) =>
                <Animal key={animal.animalId} animal={animal} />
            )}
        </div>
    );
}

export default Animals