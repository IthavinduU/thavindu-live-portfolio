import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";
import parse from "html-react-parser";
import dompurify from "dompurify";

const getAbstract = (text) => {
  const sentences = text.split(".").slice(0, 5).join(".") + ".";
  return sentences;
};

const cleanHTML = (html) => {
  const sanitizedHTML = dompurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "a", "strong", "em", "ul", "li"],
    ALLOWED_ATTR: ["href"]
  });
  return sanitizedHTML;
};

const Articleslider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thavinduwrites"
        );
        const data = await response.json();
        setArticles(data.items);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-4">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false
        }}
        speed={3000}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-[300px] md:h-[400px]"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-4 md:gap-x-8 h-full px-4 md:px-8 lg:px-16 py-4">
              {/* image and title */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto md:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* image */}
                  <div className="mb-2 mx-auto"></div>
                  {/* title */}
                  <div className="text-base md:text-lg">{article.title}</div>
                  {/* pubDate */}
                  <div className="text-[10px] md:text-[12px] uppercase font-extralight tracking-widest">
                    {new Date(article.pubDate).toDateString()}
                  </div>
                </div>
              </div>
              {/* description and link */}
              <div className="flex-1 flex flex-col justify-center relative md:pl-8">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-2xl md:text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* description */}
                <div className="text-sm md:text-base xl:text-lg text-center md:text-left mb-4">
                  {parse(cleanHTML(getAbstract(article.description)))}
                </div>
                {/* link to full article */}
                <Link href={article.link} passHref>
                  <span className="text-blue-500 hover:underline mt-4 cursor-pointer">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Articleslider;
