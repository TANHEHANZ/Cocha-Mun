import { Carousel } from "@material-tailwind/react";
import img2 from "../../assets/CARRUSEL/1.webp";
import img3 from "../../assets/CARRUSEL/2.webp";
import img4 from "../../assets/CARRUSEL/3.webp";
import img5 from "../../assets/CARRUSEL/4.webp";
import img6 from "../../assets/CARRUSEL/5.webp";
import img7 from "../../assets/CARRUSEL/6.webp";

export function CarouselCustomNavigation() {
  const img = [img2, img3, img4, img5, img6, img7];

  return (
    <Carousel
      autoplay={true}
      autoplayDelay={4000}
      loop={true}
      className="w-[100vw] h-[60vh] md:h-[85vh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {img.map((selectImg, index) => (
        <div key={index} className="relative w-full h-full">
          <img
            src={selectImg}
            alt={`image ${index}`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-light-blue-900/50 mix-blend-multiply" />
        </div>
      ))}
    </Carousel>
  );
}
