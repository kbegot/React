import NavBar from "../components/UI/NavBar"
import { animal } from '../interfaces/interfaces'
import Animals from '../components/Animals'
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";



export default function Animal() {

  const [newAnimals, setNewAnimals] = useState<string>();
  const [nameState, setNameAnimal] = useState<string>()   //use fore create Animal
  const [idState, setIdAnimal] = useState<number>()       //use for delete Animal
  const [animals, setAnimals] = useState<animal[]>([]);   //use for display Animals

  useEffect(() => {
    getAnimals();
  }, []);
  async function getAnimals() {
    try {
      const response = await axios.get('https://localhost:7298/Animal/GetAnimals');
      const animals: animal[] = response.data.map((responseItem: animal) => {
        return {
          animalId: responseItem.animalId,
          name: responseItem.name
        }
      });
      setAnimals(animals);
    } catch (error) {
      console.log(error);
    }
  }

  async function addAnimal(name: string | undefined) {
    const nameAnimals = { name: name }
    try {
      await axios.post('https://localhost:7298/Animal/CreateAnimal', nameAnimals);
      getAnimals();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAnimal(id: number) {
    try {
      await axios.delete(`https://localhost:7298/DeleteAnimal/${id}`);
      getAnimals();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateAnimals(id: number, newAnimals: any) {
    try {
      await axios.patch(`https://localhost:7298/UpdateAnimal/${id}`, newAnimals);
      getAnimals();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <NavBar></NavBar>
      <div className="">
        <label>Ajouter un Animal: </label>
        <input type="textarea" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounde transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={(e) => setNameAnimal(e.target.value)}
          value={nameState || ''}
          maxLength={15}
        />
        <div className="text-center">
          <button className="mt-2 bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => addAnimal(nameState)}
          > Ajouter</button>
        </div>
      </div>
      <div>
        <label>Supprimer un Animal</label>
        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounde transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={(e) => setIdAnimal(parseInt(e.target.value))}
          value={idState || ''}
        />
        <div className="text-center">
          <button className="mt-2 bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => idState ? deleteAnimal(idState) : console.log('no id')}>
            Supprimer
          </button>
        </div><br />
      </div>
      <div>
        <div>
          <label>Modifier un Animal</label><br />
          <input placeholder="ID" type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounde transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => setIdAnimal(parseInt(e.target.value))}
            value={idState || ''}
          />
          <input placeholder="Nouveau nom" type="textarea" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounde transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => setNewAnimals(e.target.value)}
            value={newAnimals || ''}
            maxLength={15}
          />
          <button className="mt-2 bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
            onClick={() => idState ? updateAnimals(idState, { name: newAnimals }) : console.log('no id')}>
            Modifier
          </button>
        </div> <br />
      </div>
      <Animals items={animals} onDelete={deleteAnimal}></Animals>
    </>
  );
}