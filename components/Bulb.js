import Image from "next/image"; // Import the Image component from Next.js for optimized image rendering

const Bulb = () => {
  return (
    // Container div for the bulb image with various styling classes
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] sm:w-[220px] md:w-[240px] xl:w-[260px]">
      <Image
        // Image source
        src="/bulb.png"
        // Set layout to responsive to adjust image size based on container size
        layout="responsive"
        // Set image dimensions
        width={260}
        height={200}
        // Tailwind classes for setting width and height to full
        className="w-full h-full"
        // Alt text for accessibility
        alt="bulb img"
      />
    </div>
  );
};

export default Bulb;
