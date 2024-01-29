import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';

const sliderImgs = [
  "/slide.png",
  "/slide.png",
  "/slide.png",
  "/slide.png",
]

const DiscoverSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
    >
      {
        sliderImgs.map((sliderImg, i) => <SwiperSlide key={i}>
          <img src={sliderImg} alt={"slide" + i} />
        </SwiperSlide>)
      }

    </Swiper>
  )
}

export default DiscoverSlider