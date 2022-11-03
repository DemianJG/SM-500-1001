import './App.css';
import { Inicio } from './Components/Inicio';
import {NavBar} from './Components/NavBar'

document.addEventListener("DOMContentLoaded", { NavBar, Inicio});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
}

function App() {
  return (
    <div className="App">
      <link rel="manifest" href="manifest.json" />
      sw
      <NavBar />
      <Inicio />
      <script href="sw.js"/>
    </div>
  );
}

export default App;
