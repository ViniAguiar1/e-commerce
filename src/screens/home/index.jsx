import { useState, useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import Cookies from 'js-cookie';
import Product from "../../components/product/Product"; // Importando o componente reutilizável
import FilterSidebar from "../../components/filters/FilterSidebar"; // Sidebar de Filtros
import Banner from "../../components/banner/Banner";
import {
  HomeContainer,
  CarouselContainer,
  Slide,
  Button,
  ProductList,
  ContentContainer,
  CarouselWeekContainer,
  CarouselProductList, // Usando o novo nome para o carrossel
  TitleWithGoldenBar,
} from "./styles"; // Estilos atualizados
import { motion } from "framer-motion";
import "./home.css";
import AvisosImportantes from "../../components/notice/AvisosImportantes";
import FooterFAQ from "../../components/footer/FooterFAQ";

// Importando a imagem padrão
import defaultImage from "../../../public/img/camisa-black.png"; // Ajuste no caminho para a imagem padrão

// Banners (mantidos para exibir na página)
const banners = [
  { id: 1, title: "Banner 1", image: "url-do-banner-1" },
  { id: 2, title: "Banner 2", image: "url-do-banner-2" },
  { id: 3, title: "Banner 3", image: "url-do-banner-3" },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  // Fetch de produtos da API
  function carregaProdutos() {
    const accessToken = Cookies.get("access_token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://api.spartacusprimetobacco.com.br/api/produtos/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const mappedProducts = result.map((product) => ({
          id: product.codigoPRODUTO, // Capturando o id correto
          name: product.nomePRODUTO,
          price: product.precoPRODUTO,
          unit: "unidade", // Supondo que a unidade seja "unidade"
          image: product.imagemPRODUTO || defaultImage, // Usando imagem padrão se não houver
        }));
        setProducts(mappedProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === banners.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // Chama a função de carregar os produtos ao montar o componente
  useEffect(() => {
    carregaProdutos();
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
            <TitleWithGoldenBar>Produtos em destaque</TitleWithGoldenBar>
            <ProductList>
              {products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id} // Passa o id correto para navegação
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
          <TitleWithGoldenBar>Promoções da Semana</TitleWithGoldenBar>
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
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CarouselProductList>
                {products.map((product) => (
                  <motion.div className="itemProduct" key={product.id}>
                    <Product
                      key={product.id}
                      id={product.id} // Passa o id correto
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 25,
            marginTop: 8,
          }}
        >
          <Banner />
          <Banner />
        </div>
        <AvisosImportantes />
      </HomeContainer>
      <FooterFAQ />
    </>
  );
}

export default Home;
