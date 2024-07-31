import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Link href="/BuyTemplate">
        <p className="footer">© 2024 Thavindu Liyanage. All rights reserved.</p>
      </Link>
    </footer>
  );
};

export default Footer;
