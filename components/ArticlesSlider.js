import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components for creating slides
import "swiper/css"; // Import basic Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Navigation, Pagination, Autoplay } from "swiper"; // Import Swiper modules for additional functionalities
import { FaQuoteLeft } from "react-icons/fa"; // Import FontAwesome icon for quotes
import Link from "next/link"; // Import Next.js Link component for navigation
import parse from "html-react-parser"; // Import library to safely parse HTML strings into React components
import dompurify from "dompurify"; // Import library to sanitize HTML strings

// Function to extract the first few sentences from the article's text
const getAbstract = (text) => {
  const sentences = text.split(".").slice(0, 5).join(".") + ".";
  return sentences;
};

// Function to sanitize HTML content to prevent XSS attacks
const cleanHTML = (html) => {
  const sanitizedHTML = dompurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "a", "strong", "em", "ul", "li"], // Allow only specific tags
    ALLOWED_ATTR: ["href"] // Allow only href attribute
  });
  return sanitizedHTML;
};

const Articleslider = () => {
  const [articles, setArticles] = useState([]); // Initialize state to hold fetched articles

  // Fetch articles from Medium's RSS feed using useEffect
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

    fetchArticles(); // Call the function to fetch articles when the component mounts
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-4">
      {/* Swiper component for creating the slider */}
      <Swiper
        navigation={true} // Enable navigation arrows
        pagination={{
          clickable: true // Enable pagination dots
        }}
        autoplay={{
          delay: 7000, // Set delay between automatic slide transitions
          disableOnInteraction: false // Continue autoplay after user interaction
        }}
        speed={3000} // Transition speed between slides
        loop={true} // Enable continuous looping of slides
        modules={[Navigation, Pagination, Autoplay]} // Use Swiper modules for functionality
        className="h-[300px] md:h-[400px]" // Tailwind classes for height
      >
        {/* Loop through articles and create a slide for each one */}
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-4 md:gap-x-8 h-full px-4 md:px-8 lg:px-16 py-4">
              {/* Article image and title */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto md:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* Article image (currently empty, but can be added here) */}
                  <div className="mb-2 mx-auto"></div>
                  {/* Article title */}
                  <div className="text-base md:text-lg px-1">
                    {article.title}
                  </div>
                  {/* Publication date */}
                  <div className="text-[10px] md:text-[15px] uppercase font-extralight tracking-widest py-3">
                    {new Date(article.pubDate).toDateString()}
                  </div>
                </div>
              </div>
              {/* Article description and link */}
              <div className="flex-1 flex flex-col justify-center relative md:pl-8">
                {/* Quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-2xl md:text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* Article description (sanitized and parsed HTML) */}
                <div className="text-sm md:text-base xl:text-lg text-center md:text-left mb-4">
                  {parse(cleanHTML(getAbstract(article.description)))}
                </div>
                {/* Link to the full article */}
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
