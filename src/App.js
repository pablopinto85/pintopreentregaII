import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {
  return (
    <BrowserRouter>
    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}  />
        <Route path='/categoria/:categoria' element={<ItemListContainer/> } />
        <Route path='/detalles/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

