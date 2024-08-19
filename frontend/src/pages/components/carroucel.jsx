import { Carousel } from "@material-tailwind/react";
import img2 from "../../assets/CARRUSEL/2 (2).jpg";
import img3 from "../../assets/CARRUSEL/3.jpg";
import img4 from "../../assets/CARRUSEL/4.jpg";
import img5 from "../../assets/CARRUSEL/5.jpg";
import img6 from "../../assets/CARRUSEL/6.jpg";
import img7 from "../../assets/CARRUSEL/7.jpg";
export function CarouselCustomNavigation() {
  const img = [img2, img3, img4, img5, img6, img7];

  return (
    <Carousel
      autoplay={true}
      autoplayDelay={4000}
      loop={true}
      className="  w-[100vw] h-[60vh]  md:h-[85vh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4  left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {img.map((slectImg, index) => (
        <img
          key={index}
          src={slectImg}
          alt={`image ${slectImg}`}
          className="w-full  h-full object-cover object-top"
        />
      ))}
    </Carousel>
  );
}
