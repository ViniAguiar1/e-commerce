import { useState, useEffect } from "react";
import {
  CarouselContainer,
  ProductList,
  Slide,
  ProductCard,
  Button,
} from "./styles"; // Estilos definidos no styles.ts

const products = [
  {
    id: 1,
    name: "Nome do Produto 1",
    price: "R$ 50",
    unit: "unidade",
    image: "/img/camisa-black.png",
  },
  {
    id: 2,
    name: "Nome do Produto 2",
    price: "R$ 97",
    unit: "grama",
    image: "/img/camisa-black.png",
  },
  {
    id: 3,
    name: "Nome do Produto 3",
    price: "R$ 15",
    unit: "grama",
    image: "/img/camisa-black.png",
  },
  {
    id: 4,
    name: "Nome do Produto 4",
    price: "R$ 75",
    unit: "unidade",
    image: "/img/camisa-black.png",
  },
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <CarouselContainer>
      <ProductList currentSlide={currentSlide}>
        {products.map((product, index) => (
          <Slide key={product.id} active={index === currentSlide}>
            <ProductCard>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                {product.price}/{product.unit}
              </p>
            </ProductCard>
          </Slide>
        ))}
      </ProductList>

      <Button onClick={prevSlide} position="left">Prev</Button>
      <Button onClick={nextSlide} position="right">Next</Button>
    </CarouselContainer>
  );
};

export default ProductCarousel;
