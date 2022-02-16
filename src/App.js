import Header from './components/header';
import { useState, useEffect } from "react";
import "./sass/style.scss"
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/3')
    .then(res=>res.json())
    .then(json=>console.log(json))
  }, []);

  return (
    <div className="App">
     <Header />
    </div>
  );
}

export default App;
