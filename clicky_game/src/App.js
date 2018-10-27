import React from "react";
import Navbar from "./components/Navbar";
import {Photo, PhotoList } from "./components/Photo";
// import Photo from "./components/Photo/Photo.js";


import Counter from "./components/Counter";

const App = () => (
    <div>
        <Navbar />
        <Counter />
        <PhotoList />
        <Photo />
        <Photo />
        
    </div>
);


export default App;
