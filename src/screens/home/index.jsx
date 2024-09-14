import { useState, useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product"; // Importando o componente reutilizável
import FilterSidebar from "../../components/filters/FilterSidebar"; // Sidebar de Filtros
import {
  HomeContainer,
  CarouselContainer,
  Slide,
  Button,
  ProductList,
  ContentContainer,
  CarouselWeekContainer,
  CarouselProductList, // Usando o novo nome para o carrossel
} from "./styles"; // Estilos atualizados
import { motion } from "framer-motion";
import "./home.css";

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
  {
    id: 5,
    name: "Nome do Produto 5",
    price: "R$ 75",
    unit: "unidade",
    image: "/img/camisa-black.png",
  },
  {
    id: 6,
    name: "Nome do Produto 6",
    price: "R$ 75",
    unit: "unidade",
    image: "/img/camisa-black.png",
  },
];

const banners = [
  { id: 1, title: "Banner 1", image: "url-do-banner-1" },
  { id: 2, title: "Banner 2", image: "url-do-banner-2" },
  { id: 3, title: "Banner 3", image: "url-do-banner-3" },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === banners.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <Header />
      <CarouselContainer>
        {banners.map((banner, index) => (
          <Slide key={banner.id} active={index === currentSlide}>
            <h2>{banner.title}</h2>
            <Button>Comprar agora</Button>
          </Slide>
        ))}
      </CarouselContainer>

      <HomeContainer>
        <ContentContainer>
          {/* Lista de Produtos */}
          <div>
            <h2>Produtos em destaque</h2>
            <ProductList>
              {products.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  image={product.image}
                />
              ))}
            </ProductList>
          </div>

          {/* Sidebar de Filtros */}
          <FilterSidebar />
        </ContentContainer>

        <CarouselWeekContainer>
          {/* Carrossel da Semana sem setas, apenas rolagem */}
          <h2>Promoções da Semana</h2>
          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="inner"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 150 }}
              animate={{ x: 0}}
              transition={{ duration: 0.8 }}
            >
              <CarouselProductList>
                {/* Usando o novo nome aqui */}
                {products.map((product) => (
                  <motion.div className="itemProduct" key={product}>
                    <Product
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      unit={product.unit}
                      image={product.image}
                    />
                  </motion.div>
                ))}
              </CarouselProductList>
            </motion.div>
          </motion.div>
        </CarouselWeekContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
