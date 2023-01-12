import React from "react";
import { animal } from "../interfaces/interfaces";
import Card from "./UI/Card";

interface props {
    animal: animal
}

const Animal: React.FC<props> = ({ animal }) => {

    return (
        <>
            <Card className='animal'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{animal.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">id :{animal.animalId}</p>
            </Card>
        </>
    )
}

export default Animal