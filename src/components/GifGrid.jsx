import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

const GifGrid = ({categoria}) => {

    const {data, loading} = useFetchGifs(categoria);

    console.log(loading);

  return (
    <>
      <h3>{categoria}</h3>

      {loading && <p>Loading</p>}
     
    <div className='card-grid'>
        {
            data.map( img => (
               <GifGridItem
               key = {img.id} 
               {...img}
               />
            ))
        }
    </div>
    </>  
  )
}

export default GifGrid
