import React from 'react';

import { A11y, Navigation } from 'swiper';
import { SwiperProps, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';

type SliderProps = {
  settings: SwiperProps;
  children: React.ReactNode;
};

export const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[A11y, Navigation]} {...settings}>
      {children}
    </Swiper>
  );
};
