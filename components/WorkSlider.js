import { workSlider } from "../data/WorkSliderData"; // Importing the work slider data
import { Swiper, SwiperSlide } from "swiper/react"; // Importing Swiper components
import "swiper/css"; // Importing Swiper CSS
import "swiper/css/pagination"; // Importing Swiper pagination CSS
import { Pagination } from "swiper"; // Importing Swiper pagination module
import { BsArrowRight } from "react-icons/bs"; // Importing the arrow icon
import Image from "next/image"; // Importing Next.js Image component

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10} // Space between slides
      pagination={{
        clickable: true // Making pagination dots clickable
      }}
      modules={[Pagination]} // Using the Pagination module
      className="h-[280px] sm:h-[480px]" // Setting the height of the Swiper
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                key={imageIndex}
              >
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* Image */}
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* Title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[10px] sm:text-[12px] md:text-[13px] xl:text-[14px] tracking-[0.2em]">
                        {/* Project title */}
                        <div className="delay-100">{image.title}</div>
                        {/* Icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
