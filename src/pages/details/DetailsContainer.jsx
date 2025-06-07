
import CardCarousel from "../../components/carousel/CardCarousel";
import Stars from "../../components/stars/Stars";
import "./DetailsContainer.css"

function DetailsContainer({
  items = [],
  imageKey="poster_path",
  titleKey = "title",
  nameKey = "name",
  overviewKey = "overview",
  vote_averageKey = "vote_average",
  realease_dateKey = "release_date",
  popularityKey = "popularity",
  videoKey


}) {

  return (
    <div className="details-container">
      {items.map((item, id) => (
        <div key={id} className="details-box">

          <img
            src={`https://image.tmdb.org/t/p/original${item[imageKey]}`}
            alt="Poster"
            className="poster"
          />


          <div className="details-content">
            <h1 className="title">{item[titleKey] || item[nameKey]}</h1>

            <div className="details-info">
              <p>{item[realease_dateKey]}</p>
              <li>{item.genres?.map(genre => genre.name).join(", ")}</li>
            </div>

            <div className="details-rating">
              <Stars vote_average={item[vote_averageKey]} />
              <p>{item[popularityKey]}</p>
            </div>

            <div className="details-description">
              <p>{item[overviewKey]}</p>
            </div>

            <div className="details-media">
              {videoKey && (
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoKey}`}
                    title="Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default DetailsContainer