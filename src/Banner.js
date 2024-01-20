import React from "react";
import "./Banner.css";
import { useEffect, useState } from "react";
import instance from "./instance";
import request from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  const baseUrl= "https://image.tmdb.org/t/p/original/"


  useEffect(() => {
    async function featchData() {
      const req = await instance.get(request.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    featchData();
  }, []);

  function truncate(string,limit){
return string?.length>limit?string.substr(0,limit-1)+"...":string }

  console.log("banner component is", movie);

  return(
  <header className="banner"
  style={{
    backgroundSize:"cover",
    backgroundImage: `url(${baseUrl}${movie.backdrop_path}`,
    backgroundPosition:"center center"
  }
  }>


<div className="bannerContent">
  <h1 className="bannerTitle">{movie?.title || movie?.name||movie?.original_name}</h1>
  <h1 className="bannerDiscription">{truncate(movie?.overview,150)}</h1>
</div>

    
    </header>
  ) 
}

export default Banner;
