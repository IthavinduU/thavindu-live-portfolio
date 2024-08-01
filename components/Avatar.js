import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:block w-full xl:w-auto xl:max-w-[737px] xl:max-h-[678px] relative">
      <Image
        src="/avatar.png"
        layout="responsive"
        width={737}
        height={678}
        alt="Avatar"
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
