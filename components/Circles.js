import Image from "next/image"; // Importing the Image component from Next.js for optimized image handling

const Circles = () => {
  return (
    // Container div for the image with Tailwind CSS classes
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      {/* Image component with responsive properties */}
      <Image
        src={"/circles.png"} // Path to the image
        width={260} // Specified width for image optimization
        height={200} // Specified height for image optimization
        className="w-full h-full" // Tailwind classes for ensuring the image takes full width and height of its container
        alt="" // Empty alt attribute as no descriptive text is provided
      />
    </div>
  );
};

export default Circles;
