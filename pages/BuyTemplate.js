import Footer from "../components/Footer";

const BuyTemplate = () => {
  return (
    <div className="h-screen flex flex-col bg-primary/60">
      <div className="flex-grow flex items-center justify-center">
        <p className="buy-template">
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
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default BuyTemplate;
