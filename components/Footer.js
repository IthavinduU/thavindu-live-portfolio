import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Link href="/BuyTemplate">
        <p className="footer hover:text-gray-400 transition-colors duration-300 text-sm md:text-base ">© 2024 Thavindu Liyanage. All rights reserved.</p>
      </Link>
    </footer>
  );
};

export default Footer;
