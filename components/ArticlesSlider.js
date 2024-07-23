import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

const articleSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thavindul"
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
    <div className="h-full bg-gray-900 py-8">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination]}
        className="h-[400px]"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <img
                      src={article.thumbnail}
                      width={100}
                      height={100}
                      alt={article.title}
                    />
                  </div>
                  {/* title */}
                  <div className="text-lg">{article.title}</div>
                  {/* pubDate */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {new Date(article.pubDate).toDateString()}
                  </div>
                </div>
              </div>
              {/* message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* description */}
                <div className="xl:text-lg text-center md:text-left">
                  {article.description}
                </div>
                {/* link to full article */}
                <Link href={article.link} passHref>
                  <div className="text-blue-500 hover:underline mt-4 cursor-pointer">
                    Read more
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default articleSlider;
