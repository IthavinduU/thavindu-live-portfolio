import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxMobile
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Creating responsive, functional websites tailored to your needs, from front-end to back-end."
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Design",
    description: "Designing intuitive, user-friendly interfaces that enhance user experience and engagement."
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Building mobile apps for iOS and Android, ensuring seamless user experiences across platforms."
  },
  {
    icon: <RxReader />,
    title: "Article Writing",
    description: "Delivering well-crafted articles that communicate your message effectively and resonate with your audience."
  },
  {
    icon: <RxRocket />,
    title: "IT Consultation",
    description: "Offering expert IT advice to optimize your technology strategies and drive business growth."
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[340px] sm:h-[400px] lg:h-[450px] px-4"
    >
      {serviceData.map((item, index) =>
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col gap-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              {item.icon}
            </div>
            {/* title & desc */}
            <div>
              <div className="mb-2 text-lg font-semibold">
                {item.title}
              </div>
              <p className="text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl mt-4" />
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default ServiceSlider;
