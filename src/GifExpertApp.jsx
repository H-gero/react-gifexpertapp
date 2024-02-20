import { useState } from "react";
import React from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
//    const categorias = ['One Punch','Samurai X','Dragon Ball'];
const [categorias, setcategorias] = useState(['One Punch'])

// const handleAdd = () =>{
//     setcategrias([...categorias,'HunterXHunter'])
// }

    return(
        <>
    <h2>GifExpertApp</h2>
    <AddCategory setcate={setcategorias}/>
    <hr/>

    <ol>
        {
            categorias.map(categorias => {
                return <GifGrid 
                key = {categorias}
                categoria={categorias}/>
            })
        }
    </ol>
    </>
    );
    
};

export default GifExpertApp;