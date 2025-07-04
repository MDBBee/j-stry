import { Button } from "@/components/ui/button";
import ImageSlide from "@/components/visitors/ImageSlide";
import Intro from "@/components/visitors/Intro";
import img1 from "@/public/visitors6.svg";
import Image from "next/image";

const PublicPage = () => {
  return (
    <div className="grid md:grid-cols-2 -mt-8">
      <div className="w-full">
        <Intro />
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          src={img1}
          alt="Homepage"
          height={400}
          width={350}
          className="h-[350px]"
        />
      </div>
      <div className="mt-16 flex justify-around">
        <Button
          variant="outline"
          className="w-1/3 ld-shadow border-2 border-primary hover:-translate-y-1 duration-200"
        >
          Sign(Up|In)
        </Button>
        <Button
          variant="outline"
          className="w-1/3 ld-shadow border-2 border-primary hover:-translate-y-1 duration-200"
        >
          Try (Out)
        </Button>
      </div>
      <div>
        <ImageSlide />
      </div>
    </div>
  );
};
export default PublicPage;
