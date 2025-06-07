import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./HeaderCarousel.css";

function HeaderCarousel({ 
  items = [], 
  imageKey = "backdrop_path", 
  renderOverlay, 
  autoplayDelay = 8000 
}) {

  
  return (
    <div className="header-carousel-container">
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Autoplay]}
        autoplay={{ delay: autoplayDelay }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="header-slide">
              <img
                src={`https://image.tmdb.org/t/p/original${item[imageKey]}`}
                className="header-img"
              />
              {renderOverlay && renderOverlay(item)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderCarousel;
