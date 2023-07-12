import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './App.scss';
import Page from "./components/page";
import Navbar from './components/nav';

//      <SwiperSlide><Page contentType='Music'/></SwiperSlide>

function App() {

  // <Page contentType='Footer'></Page>

  return (
  <div className="App">
    <Navbar/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Page contentType="Landing"/></SwiperSlide>
      <SwiperSlide><Page contentType='Bio'/></SwiperSlide>
      <SwiperSlide><Page contentType='Music'/></SwiperSlide>
      <SwiperSlide><Page contentType='Blog'/></SwiperSlide>
      <SwiperSlide><Page contentType='Contact'/></SwiperSlide>
    </Swiper>
  </div>
  );
}

export default App;
