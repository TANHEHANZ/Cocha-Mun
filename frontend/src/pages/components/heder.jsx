import { CarouselCustomNavigation } from "./carroucel";
import Cronometro from "./cronometro";
import logoCocha from "../../assets/logo/cohabamba.png";

const Heder = () => {
  return (
    <div className="flex flex-col  relative ">
      <section className="flex flex-col  justify-start items-start   bg-blue-gray-700 ">
        <Cronometro />
      </section>

      <CarouselCustomNavigation />
    </div>
  );
};

export default Heder;
