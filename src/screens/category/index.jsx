import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import styled from "styled-components";
import Ronaldo from "../../../public/img/fenomeno.png";
import Messi from "../../../public/img/messi.png";
import FooterFAQ from "../../components/footer/FooterFAQ";
import Kaka from "../../../public/img/kaka.png";
import Dorival from "../../../public/img/dorival.png";
import Product from "../../components/product/Product"; // Importa o componente Product

// Estilos do banner
const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 30px;
  border-radius: 15px;
  width: 80%;
  height: 12rem;
  max-width: 800%;
  margin: 0 auto;
  margin-top: 50px;
`;

const TextContainer = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #333;
`;

const ImageContainer = styled.img`
  width: 30%;
  height: auto;
  border-radius: 8px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 84%;
  margin: 0 auto;
  padding: 1.875rem;
`;

const CategoryListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  overflow-x: auto;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const CategoryItem = styled.li`
  font-size: 18px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#ccc" : "transparent")};
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CategoryImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Ajustado para 4 colunas */
  gap: 15px; /* Diminuindo o espaçamento entre os cards */
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SortBy = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

// Estilos dos novos cards (semelhantes ao exemplo fornecido)
const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Card = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  width: 20%; /* Reduzindo a largura */
  height: 350px; /* Reduzindo a altura */
  border-radius: 10px;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.273);
  border-radius: 10px;
  padding: 10px;
  /* margin-bottom: 5px; */
`;

const CardTitle = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
`;

const CardSubtitle = styled.p`
  font-size: 22px;
  margin-top: 10px;
  color: #FFF;
`;

const DiscountBadge = styled.div`
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 10px;
  font-weight: bold;
  position: absolute;
  top: 15px;
  margin-left: 15%; /* Ajustando a margem para centralizar */
  margin-top: 70%; /* Diminuindo o valor da margem superior */
`;

function Category() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

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
        const mappedProducts = result.map((produto) => ({
          id: produto.codigoPRODUTO,
          name: produto.nomePRODUTO,
          description: produto.descricaoPRODUTO,
          price: parseFloat(produto.precoPRODUTO).toFixed(2),
          image: produto.imagemPRODUTO,
          categoria: produto.categoriaPRODUTO,
        }));
        setProdutos(mappedProducts);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    carregaCategorias();
    carregaProdutos();
  }, []);

  const produtosFiltrados = categoriaSelecionada
    ? produtos.filter((produto) => produto.categoria === categoriaSelecionada)
    : produtos;

  return (
    <>
      <Header />
      <BannerContainer>
        <TextContainer>
          Sim, <br /> Esse é o Ronaldo.
        </TextContainer>
        <ImageContainer src={Ronaldo} alt="Sim, o fenomeno" />
      </BannerContainer>

      <PageContainer>
        <CategoryListContainer>
          <CategoryList>
            {categorias.length > 0 ? (
              categorias.map((categoria) => (
                <CategoryItem
                  key={categoria.id}
                  onClick={() => setCategoriaSelecionada(categoria.id)}
                  selected={categoria.id === categoriaSelecionada}
                >
                  <CategoryImage src={categoria.image} alt={categoria.name} />
                  {categoria.name}
                </CategoryItem>
              ))
            ) : (
              <p>Carregando categorias...</p>
            )}
          </CategoryList>
        </CategoryListContainer>

        <ProductsContainer>
          <FiltersContainer>
            <h2>Produtos</h2>
            <SortBy>
              <option value="popularity">Popularity</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </SortBy>
          </FiltersContainer>

          <ProductsGrid>
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto) => (
                <Product // Utilizando o componente Product para navegação
                  key={produto.id}
                  id={produto.id}
                  name={produto.name}
                  price={produto.price}
                  image={produto.image}
                  unit="unidade"
                />
              ))
            ) : (
              <p>Nenhum produto encontrado para esta categoria.</p>
            )}
          </ProductsGrid>
        </ProductsContainer>

        {/* Seção de novos cards de categorias com desconto */}
        <CardSection>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} bgImage={Kaka}>
            <DiscountBadge>ATÉ 60%OFF</DiscountBadge>
            <CardOverlay>
              <CardTitle>Feminino</CardTitle>
              <CardSubtitle>confira &gt;</CardSubtitle>
            </CardOverlay>
          </Card>

          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} bgImage={Dorival}>
            <DiscountBadge>ATÉ 60%OFF</DiscountBadge>
            <CardOverlay>
              <CardTitle>Masculino</CardTitle>
              <CardSubtitle>confira &gt;</CardSubtitle>
            </CardOverlay>
          </Card>

          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} bgImage={Ronaldo}>
            <DiscountBadge>ATÉ 60%OFF</DiscountBadge>
            <CardOverlay>
              <CardTitle>Kids</CardTitle>
              <CardSubtitle>confira &gt;</CardSubtitle>
            </CardOverlay>
          </Card>

          <Card bgImage={Messi}>
            <DiscountBadge>ATÉ 60%OFF</DiscountBadge>
            <CardOverlay>
              <CardTitle>Bebê</CardTitle>
              <CardSubtitle>confira &gt;</CardSubtitle>
            </CardOverlay>
          </Card>
        </CardSection>
      </PageContainer>
      <FooterFAQ />
    </>
  );
}

export default Category;
