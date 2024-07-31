import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxMobile,
  RxArrowTopRight
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Building responsive and functional websites."
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces."
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Developing mobile applications for iOS and Android."
  },
  {
    icon: <RxReader />,
    title: "Article Writing",
    description: "Crafting well-researched and engaging articles."
  },
  {
    icon: <RxRocket />,
    title: "IT Consultation",
    description: "Providing expert advice for IT strategies."
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[340px] sm:h-[400px] lg:h-[450px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal text-sm sm:text-base">
                {item.description}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
