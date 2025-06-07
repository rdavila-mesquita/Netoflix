import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import MovieContainer from '../../components/movie-container/MovieContainer'
import './Home.css'


function Home() {
  const [trending, setTrending] = useState([]);
  const [action, setAction] = useState([]);
  const [suspense, setSuspense] = useState([]);
  const [upComming, setUpComming] = useState([]);
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=pt-BR';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setTrending(data.results);
    }

    getTrending();
  }, []);

  useEffect(() => {
    async function getAction() {
      const url = 'https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR'; 
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setAction(data.results);
    }

    getAction();
  }, []);

    useEffect(() => {
      async function getSuspense(){
      const url = 'https://api.themoviedb.org/3/discover/movie?with_genres=9648&language=pt-BR'; 
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setSuspense(data.results);
    }

    getSuspense();
  }, []);

      useEffect(() => {
      async function getUpComming(){
      const url = 'https://api.themoviedb.org/3/movie/upcoming?language=pt-BR'; 
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setUpComming(data.results);
    }

    getUpComming();
  }, []);
  

      useEffect(() => {
      async function getComedy(){
      const url = 'https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR'; 
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setComedy(data.results);
    }

    getComedy();
  }, []);
  
  return (
    <>
      <Header />
      <div className="cards">
        <MovieContainer title="Tendências" items={trending} />
        <MovieContainer title="Vem por aí" items={upComming} />
        <MovieContainer title="Filmes de ação" items={action} />
        <MovieContainer title="Filmes de comédia" items={comedy} />
        <MovieContainer title="Para roer as unhas" items={suspense} />
      </div>
    </>
  );
}


export default Home
