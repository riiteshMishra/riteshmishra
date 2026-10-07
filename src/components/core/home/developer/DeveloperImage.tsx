import Image from "next/image";

const DeveloperImage = () => {
  return (
    <div className="relative size-full overflow-hidden rounded-full border-2 border-accent-green/20">
      <Image
        src="/ritesh-mishra.jpg"
        alt="Ritesh Mishra — Full Stack Developer"
        fill
        priority
        sizes="(max-width: 640px) 208px, 240px"
        className="object-cover"
      />
    </div>
  );
};

export default DeveloperImage;
