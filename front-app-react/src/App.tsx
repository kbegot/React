
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Animals from './components/Animals'
import { animal } from './interfaces/interfaces';
import Home from './views/HomeView';
import Animal from './views/AnimalView';
import Exercice from './views/ExerciceView'
const App = () => {                                               
  
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/animal' element={<Animal/>}/>
        <Route path='/exercice' element={<Exercice/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App