import { useEffect, useState } from "react";
import "./Details.css"
import { useParams } from "react-router-dom";
import DetailsContainer from "./DetailsContainer";
import CardCarousel from "../../components/carousel/CardCarousel";
import MovieContainer from "../../components/movie-container/MovieContainer";

function Details() {

    const {id} = useParams()
    const [details, setDetails] = useState(null)
     useEffect(() => {
        async function getDetails() {
          const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
            }
          };
    
          const response = await fetch(url, options);
          const data = await response.json();
          setDetails(data);
        }
    
        getDetails();
      }, [id]);

    const [recomendation, setRecomendation] = useState(null)
     useEffect(() => {
        async function getRecomendation() {
          const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=pt-BR`;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
            }
          };
    
          const response = await fetch(url, options);
          const data = await response.json();
          setRecomendation(data);
        }
    
        getRecomendation();
      }, [id]);

    const [videoKey, setVideoKey] = useState(null)
     useEffect(() => {
        async function getVideo() {
          const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
            }
          };
    
          const response = await fetch(url, options);
          const data = await response.json();
          const trailer = data.results.find(
                (video) => video.type === "Trailer" && video.site === "YouTube"
            );
            if (trailer) {
        setVideoKey(trailer.key);
      }
        }
    
        getVideo();
      }, [id]);
    
  return (
  <>
    {details ? (
      <DetailsContainer items={[details]} videoKey={videoKey} />
    ) : (
      <p>Se aperreie não...</p>
    )}

    <div className="card-recomendation">
    {recomendation && recomendation.results?.length > 0 && (
      <MovieContainer title="Sugestões que você vai adorar" items={recomendation.results} />
    )}
    </div>
  </>
  )

}

export default Details