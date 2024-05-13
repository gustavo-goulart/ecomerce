import { Carousel } from "react-bootstrap";
import Imagem1 from "../../src/assets/images/banner_img.webp";
import Imagem2 from "../../src/assets/images/banner_img_2.webp";
import Imagem3 from "../../src/assets/images/banner_img_3.webp";

function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Imagem1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Imagem2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Imagem3} alt="Tirt slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export { CarouselAnuncios };
