import Footer from "../components/Footer";

const BuyTemplate = () => {
  return (
    <div className="h-screen flex flex-col bg-primary/60">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-[90%] mx-auto">
          Hey! If you would like to purchase my portfolio template, please reach
          out to me on{" "}
          <a
            href="https://www.buymeacoffee.com/Odbb0q1cZY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            buymeacoffee
          </a>
        </p>
      </div>
      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default BuyTemplate;
