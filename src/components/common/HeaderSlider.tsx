import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

const HeaderSlider: React.FC = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="flex"
      >
        <SwiperSlide>
          <div className="w-full py-2 bg-gray-100 text-center">
            <h1 className="font-medium">New Styles on Sale: Up to 40% Off</h1>
            <p className="underline text-xs pt-1 font-medium leading-6">
              <a href="#">Shop All Our New Markdowns</a>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full py-2 bg-gray-100 text-center">
            <h1 className="font-medium">Hello Nike App</h1>
            <p className="text-[11px] pt-1 font-medium leading-6">
              Download the app to access everything Nike.
              <span className="underline font-semibold">
                <a href="#">Get Your Great</a>
              </span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeaderSlider;
