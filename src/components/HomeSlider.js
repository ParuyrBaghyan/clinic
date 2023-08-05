import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Typewriter from 'typewriter-effect';
export default () => {

  const pictureList = ['/img/slider1.png', '/img/slider2.jpg', '/img/slider3.jpg', '/img/slider4.jpg',]

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {pictureList.map((item,i) => {
        return <SwiperSlide style={{
          background: `url(${item})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}><img src="" alt="" />
        </SwiperSlide>
      })}

      ...
    </Swiper>
  );
};


