import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import camisa1 from "../assets/camisas/1.png";
import camisa2 from "../assets/camisas/2.png";
import camisa3 from "../assets/camisas/3.png";

const Home = () => {
  return (
    <HomeContainer>
      <Product>
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

      <Product>
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
    </HomeContainer>
  );
};

export default Home;
