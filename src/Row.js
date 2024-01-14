import React from 'react'
import { useState, useEffect } from 'react'
import instance from './instance';
import './Row.css'


function Row({title,fetchurl,isLargeRow}) {
    
const [movie, setmovie]= useState([])

const baseUrl= "https://image.tmdb.org/t/p/original/"

useEffect(()=>{
    async function featchData(){
        const req = await instance.get(fetchurl)
        setmovie(req.data.results)
    }
    featchData()
}, [])
console.log(movie);

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row__posters'>
        {movie.map((item)=>(
          <img
          key={item.id}
          className={`row__poster ${isLargeRow && "row__posterLarge"} `}
          src={`${baseUrl}${isLargeRow? item.poster_path:item.backdrop_path}`}
          alt={item.name}
          />
        ))}
</div>
    </div>
  )
}

export default Row