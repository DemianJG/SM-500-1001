import './App.css';
import { Client } from './components/clients';
import Cover from './components/Cover';
import { Inicio } from './components/Inicio';
import {NavBar} from './components/NavBar'
import ShowUsers from './components/ShowUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUsers';
import EditUser from './components/EditUser';

document.addEventListener("DOMContentLoaded", { NavBar, Inicio, Cover});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
        .register("../serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Cover />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowUsers/> } />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/edit' element={<EditUser />} />
        </Routes>
      </BrowserRouter> 
      <Client />
    </div>
  );
}

export default App;
