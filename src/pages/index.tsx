import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import camisa1 from "../assets/camisas/1.png";
import camisa2 from "../assets/camisas/2.png";
import camisa3 from "../assets/camisas/3.png";

const Home = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image
          src={camisa1}
          width={520}
          height={480}
          alt="Camisa da Rocketseat"
        />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={camisa2}
          width={520}
          height={480}
          alt="Camisa da Rocketseat"
        />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={camisa3}
          width={520}
          height={480}
          alt="Camisa da Rocketseat"
        />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={camisa3}
          width={520}
          height={480}
          alt="Camisa da Rocketseat"
        />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
};

export default Home;
