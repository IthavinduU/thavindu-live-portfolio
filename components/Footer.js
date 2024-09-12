import Link from "next/link"; // Importing the Link component from Next.js for client-side navigation

const Footer = () => {
  return (
    // Footer container
    <footer className="footer-container">
      {/* Link component for navigating to the template purchase page */}
      <Link href="/BuyTemplate">
        {/* Footer text with Tailwind CSS classes for styling */}
        <p className="footer hover:text-gray-400 transition-colors duration-300 text-sm md:text-base">
          © 2024 Thavindu Liyanage. All rights reserved.
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
