import CardCarousel from "../carousel/CardCarousel"
import MovieCard from "../movie-card/MovieCard"
import {GENRE_MAP} from "../genres"
import "./MovieContainer.css"

function MovieContainer({ title, items }) {
  return (
    <div className="movie-container">
      <h1>{title}</h1>
      <CardCarousel
        spaceBetween={10}
        items={items}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        renderOverlay={(item) => {
        const genresFromIds = item.genre_ids?.map((id) => ({ name: GENRE_MAP[id] }));

        return (
          <MovieCard
            backdrop_path={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            title={item.title || item.name}
            vote_average={item.vote_average}
            id={item.id}
            genres={genresFromIds}
          />
        );
      }}
      />
    </div>
  )
}

export default MovieContainer
