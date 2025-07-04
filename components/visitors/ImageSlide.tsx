import Image from "next/image";
import lp2 from "@/public/lp2.svg";
import lp5 from "@/public/lpstatsdark.png";
import lp3 from "@/public/test6.png";

const ImageSlide = () => {
  const images = [lp2, lp5, lp3];

  return (
    <div className="h-[18rem] w-[20rem] border-2  mx-auto overflow-hidden rounded-md">
      <Image
        src={images[2]}
        alt="landing page images"
        height={288}
        width={320}
        className="object-left-top h-70"
      />
    </div>
  );
};

export default ImageSlide;
