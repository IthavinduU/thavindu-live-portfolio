import Image from "next/image"; // Import the Image component from Next.js for optimized image rendering

const Avatar = () => {
  return (
    // Container div for the avatar image
    <div className="hidden xl:block w-full xl:w-auto xl:max-w-[737px] xl:max-h-[678px] relative">
      <Image
        // Image source
        src="/avatar.png"
        // Set layout to responsive to adjust image size based on container size
        layout="responsive"
        // Set image dimensions
        width={737}
        height={678}
        // Alt text for accessibility
        alt="Avatar"
        // Tailwind class for object-fit cover
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
