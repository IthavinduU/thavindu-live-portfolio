// links
import Link from "next/link";

// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMediumFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[25px]">
      <Link
        href={"https://www.linkedin.com/in/thavinduliyanage/"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://github.com/IthavinduU"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://medium.com/@thavindul"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMediumFill />
      </Link>
      <Link
        href={"https://wa.me/+94779691729"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappFill />
      </Link>
    </div>
  );
};

export default Socials;
