import './App.css';
import Cover from './Components/Cover';
import { Inicio } from './Components/Inicio';
import {NavBar} from './Components/NavBar'
import { Social } from './Components/SocialMedia';

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
      {/* <Social /> */}
    </div>
  );
}

export default App;
