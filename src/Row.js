import React from 'react'
import { useState, useEffect } from 'react'
import instance from './instance';


function Row({title,fetchurl}) {
    
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
    <div>
      <h1>{title}</h1>
      <div>
        {movie.map((item)=>(
          <img
          key={item.id}
          className='row__poster'
          src={`${baseUrl}${item.poster_path}`}
          alt={item.name}
          />
        ))}
</div>
    </div>
  )
}

export default Row