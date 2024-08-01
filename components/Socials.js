import Link from "next/link";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMediumFill,
  RiWhatsappFill,
  RiMailSendFill,
  RiCupFill
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[25px] relative">
      {/* Tooltip Wrapper */}
      <div className="relative group">
        <Link
          href={"mailto:thavindul@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-accent transition-all duration-300 flex items-center"
        >
          <RiMailSendFill />
        </Link>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Email
        </span>
      </div>

      <div className="relative group">
        <Link
          href={"https://www.linkedin.com/in/thavinduliyanage/"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent transition-all duration-300 flex items-center"
        >
          <RiLinkedinBoxFill />
        </Link>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          LinkedIn
        </span>
      </div>

      <div className="relative group">
        <Link
          href={"https://github.com/IthavinduU"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-accent transition-all duration-300 flex items-center"
        >
          <RiGithubFill />
        </Link>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          GitHub
        </span>
      </div>

      <div className="relative group">
        <Link
          href={"https://medium.com/@thavinduwrites"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
          className="hover:text-accent transition-all duration-300 flex items-center"
        >
          <RiMediumFill />
        </Link>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Medium
        </span>
      </div>

      <div className="relative group">
        <Link
          href={"https://wa.me/+94779691729"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-accent transition-all duration-300 flex items-center"
        >
          <RiWhatsappFill />
        </Link>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
      </div>

      <div className="relative group">
        <Link
          href={"/BuyTemplate"}
          aria-label="Buy me a coffee"
          className="hover:text-accent transition-all duration-300 flex items-center"
        >
          <RiCupFill />
        </Link>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          buymeacoffee
        </span>
      </div>
    </div>
  );
};

export default Socials;
