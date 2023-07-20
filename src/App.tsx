import { Navigation, Pagination, Scrollbar, A11y, HashNavigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';

import './App.scss';
import Page from "./components/page";
import Navbar from './components/nav';

function App() {
  return (
  <div className="App">
    <Navbar />
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, HashNavigation, EffectCreative]}
      spaceBetween={0}
      slidesPerView={1}
      cssMode={true}
      pagination={{ clickable: true }}
      hashNavigation={{
        watchState: true,
      }}

    >
      <SwiperSlide data-hash="Landing"><Page contentType="Landing"/></SwiperSlide>
      <SwiperSlide data-hash="Bio"><Page contentType='Bio'/></SwiperSlide>
      <SwiperSlide data-hash="Music"><Page contentType='Music'/></SwiperSlide>
      <SwiperSlide data-hash="Blog"><Page contentType='Blog'/></SwiperSlide>
      <SwiperSlide data-hash="Contact"><Page contentType='Contact'/></SwiperSlide>
    </Swiper>
  </div>
  );
}

export default App;
