
import "./CardCarousel.css"
import { Swiper,SwiperSlide } from 'swiper/react';

function CardCarousel({
    items = [],
    imageKey = "backdrop_path",
    titleKey = "title",
    nameKey = "name",
    slidesPerView = 1,
    breakpoints = {},
    spaceBetween = 10,
    renderOverlay = null
}) {


  return (
    <div className="carousel-container">
        <Swiper
            slidesPerView={slidesPerView}
            navigation
            spaceBetween={spaceBetween}
            breakpoints={breakpoints}
        >
           
        {items.map((item, index) => (

            <SwiperSlide key={index}>
                <div className="carousel-slide">
                    {renderOverlay ? (
                    renderOverlay(item)
                    ) : (
                    <>
                        <img
                        src={`https://image.tmdb.org/t/p/original${item[imageKey]}`}
                        className="carousel-img"
                        />
                        <h2 className="movie-title">{item[titleKey] || item[nameKey]}</h2>
                    </>
                    )}
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default CardCarousel