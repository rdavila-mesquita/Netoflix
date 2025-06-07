import "./Header.css"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderCarousel from "./HeaderCarousel";
import { FaExclamationCircle, FaPlay } from "react-icons/fa";

function Header() {
        const [popularMovies, setPopularMovies] = useState([])
        async function getPopularMovies() {
            const url = 'https://api.themoviedb.org/3/trending/all/day?language=pt-BR';
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: "Bearer "  + import.meta.env.VITE_TOKEN_TMDB
            }
        };
    
             const response = await fetch(url, options)
             const data = await response.json()
        
             console.log(data.results)
        
             setPopularMovies(data.results)
        
            }
        
            useEffect(() => { getPopularMovies() }, [])

            async function handleTrailerClick(movieId) {
            const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=pt-BR`;
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
            const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
            window.open(youtubeUrl, "_blank"); 
            } else {
            alert("Xi rapaz...");
            }
        }
    return (

<>
    <div className="carousel-header">
        <HeaderCarousel
            items={popularMovies}
            imageKey="backdrop_path"
            titleKey="title"
            autoplayDelay={9000}
            renderOverlay={(popularMovie) => (
            <div className="custom-overlay">
                <h2 className="movie-title">{popularMovie.title || popularMovie.name}</h2>
                <div className="btns">
                <button className="trailer" onClick={() => handleTrailerClick(popularMovie.id)}>
                    <FaPlay /> Ver Trailer
                </button>

                <Link to={`/details/${popularMovie.id}`}>
                    <button className="mi">
                    <FaExclamationCircle /> Mais Informações
                    </button>
                </Link>
                </div>
            </div>
            )}
        />
    </div>

    <div className="header-top">
        <img className="logo" width="200" src={logo} />
    </div>
</>

    )
}

export default Header;
