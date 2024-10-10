import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPercentage,
  FaBolt,
  FaTags,
  FaGem,
  FaLaptop,
  FaMoneyBillAlt,
} from "react-icons/fa"; // Novos ícones para as categorias
import {
  OffersContainer,
  Offer,
  SalesIcon,
  SalesText,
} from "./styles";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product"; // Componente Product importado
import FooterFAQ from "../../components/footer/FooterFAQ"; // Adiciona o footer
import styled from "styled-components";

// Estilos para o layout
const PageContainer = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 300px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const FilterTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#007bff" : "#000")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};

  &:hover {
    color: #007bff;
  }
`;

const PriceRange = styled.input`
  width: 100%;
`;

const ProductsGrid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Ajustado para 4 colunas */
  gap: 15px;
  margin-left: 20px;
`;

const SalesCarousel = () => {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [priceRange, setPriceRange] = useState(500); // Filtro de preço inicial (ajustável)

  useEffect(() => {
    carregaCategorias();
    carregaProdutos();
  }, []);

  function carregaCategorias() {
    fetch("https://api.spartacusprimetobacco.com.br/api/categorias")
      .then((response) => response.json())
      .then((result) => {
        const mappedCategorias = result.map((categoria) => ({
          id: categoria.codigoCATEGORIA,
          name: categoria.nomeCATEGORIA,
          image: categoria.imagemCATEGORIA,
          ativo: categoria.ativoCATEGORIA,
        }));
        setCategorias(mappedCategorias);
      })
      .catch((error) => console.error(error));
  }

  function carregaProdutos() {
    fetch("https://api.spartacusprimetobacco.com.br/api/produtos")
      .then((response) => response.json())
      .then((result) => {
        const mappedProducts = result
          .map((produto) => ({
            id: produto.codigoPRODUTO,
            name: produto.nomePRODUTO,
            description: produto.descricaoPRODUTO,
            price: parseFloat(produto.precoPRODUTO).toFixed(2),
            image: produto.imagemPRODUTO,
            categoria: produto.categoriaPRODUTO,
            unit: "unidade",
          }))
          // Ordenar os produtos pelo preço, do menor para o maior
          .sort((a, b) => a.price - b.price);
        setProdutos(mappedProducts);
      })
      .catch((error) => console.error(error));
  }

  const produtosFiltrados = categoriaSelecionada
    ? produtos
        .filter((produto) => produto.categoria === categoriaSelecionada)
        .filter((produto) => produto.price <= priceRange) // Filtrar pelo preço
    : produtos.filter((produto) => produto.price <= priceRange); // Filtrar pelo preço

  return (
    <>
      <Header />
      
      {/* Carrossel de Ofertas */}
      <OffersContainer
        as={motion.div} // Adiciona framer motion no container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: 30}}
      >
        <motion.div
          style={{ display: "flex", overflowX: "auto", gap: "20px" }}
          drag="x"
          dragConstraints={{ right: 0, left: -500 }} // Define o movimento no eixo X
          whileTap={{ cursor: "grabbing" }} // Efeito enquanto arrasta
        >
          <Offer as={motion.div} whileHover={{ scale: 1.1 }}>
            <SalesIcon><FaPercentage /></SalesIcon>
            <SalesText>Todas as ofertas</SalesText>
          </Offer>
          <Offer as={motion.div} whileHover={{ scale: 1.1 }}>
            <SalesIcon><FaBolt /></SalesIcon>
            <SalesText>Ofertas relâmpago</SalesText>
          </Offer>
          <Offer as={motion.div} whileHover={{ scale: 1.1 }}>
            <SalesIcon><FaTags /></SalesIcon>
            <SalesText>Outlet</SalesText>
          </Offer>
          <Offer as={motion.div} whileHover={{ scale: 1.1 }}>
            <SalesIcon><FaGem /></SalesIcon>
            <SalesText>Beauty Trends</SalesText>
          </Offer>
          <Offer as={motion.div} whileHover={{ scale: 1.1 }}>
            <SalesIcon><FaLaptop /></SalesIcon>
            <SalesText>Notebooks</SalesText>
          </Offer>
          <Offer as={motion.div} whileHover={{ scale: 1.1 }}>
            <SalesIcon><FaMoneyBillAlt /></SalesIcon>
            <SalesText>Menos de R$100</SalesText>
          </Offer>
        </motion.div>
      </OffersContainer>

      {/* Layout principal com barra lateral e produtos */}
      <PageContainer>
        {/* Barra lateral com filtro de categorias e preço */}
        <Sidebar>
          <CategoryTitle>Categorias</CategoryTitle>
          <CategoryList>
            {categorias.map((categoria) => (
              <CategoryItem
                key={categoria.id}
                selected={categoria.id === categoriaSelecionada}
                onClick={() => setCategoriaSelecionada(categoria.id)}
              >
                <img src={categoria.image} alt={categoria.name} width="40" height="40" />
                <SalesText>{categoria.name}</SalesText>
              </CategoryItem>
            ))}
          </CategoryList>

          <FilterTitle>Filtro de preço</FilterTitle>
          <PriceRange
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
          <p>Até: R$ {priceRange}</p>
        </Sidebar>

        {/* Grid de produtos */}
        <ProductsGrid>
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => (
              <Product
                key={produto.id}
                id={produto.id}
                name={produto.name}
                price={`R$ ${Number(produto.price).toFixed(2)}/${produto.unit}`}
                image={produto.image}
                addToCart={() => console.log(`Adicionado: ${produto.name}`)} // Função de adicionar ao carrinho
              />
            ))
          ) : (
            <p>Nenhum produto encontrado para esta categoria e faixa de preço.</p>
          )}
        </ProductsGrid>
      </PageContainer>

      <FooterFAQ />
    </>
  );
};

export default SalesCarousel;
