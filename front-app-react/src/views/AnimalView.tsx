import NavBar from "../components/UI/NavBar"
import { animal } from '../interfaces/interfaces'
import Animals from '../components/Animals'
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";


async function AddAnimal(name: string | undefined) {
  const nameAnimal = { name: name }
  // POST request using axios with async/await
  await axios.post('https://localhost:7298/Animal/CreateAnimal',nameAnimal);
}

export default function Animal() {

  const [respons, setResponse] = useState<animal[]>([])
  const [refreshAnimals, setRefresh] = useState<boolean>()
  const [nameState, setAnimal] = useState<string>()

  useEffect(() => {
    axios.get('https://localhost:7298/Animal/GetAnimals')
      .then((response: AxiosResponse) => {
        const animals: animal[] = response.data.map((responseItem: animal) => {
          return {
            animalId: responseItem.animalId,
            name: responseItem.name
          }
        })
        setResponse(animals)
      })
      .catch(error => {
        console.log(error);
      });

  }, [])

  return (
    <>
      <NavBar></NavBar>
      <div className="">
        <label>Ajouter un Animal: </label>
        <input type="textarea" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounde transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={(e) => setAnimal(e.target.value)}
        value={nameState || ''} 
        maxLength={15}
        />
        <div className="text-center">
          <button className="mt-2 bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded"
          onClick={() => AddAnimal(nameState)}
          > Ajouter</button>
        </div>
      </div><br />
      <Animals items={respons}></Animals>
    </>
  );
}