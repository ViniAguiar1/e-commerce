import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../../components/header/Header";
import styled, { keyframes } from "styled-components";
import { FaShoppingCart, FaStar, FaSpinner } from "react-icons/fa";
import {
  CarouselProductList,
  CarouselWeekContainer,
  TitleWithGoldenBar,
} from "../home/styles";
import { motion } from "framer-motion";
import Product from "../../components/product/Product";
import FooterFAQ from "../../components/footer/FooterFAQ";
import NotFound from "../404";

// Animação de rotação para o ícone de carregamento
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Estilo da tela de carregamento
const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9; // cor suave de fundo
`;

// Ícone de carregamento estilizado
const Spinner = styled(FaSpinner)`
  font-size: 48px;
  color: #27ae60; // cor principal do site
  animation: ${spin} 1s linear infinite;
`;

// Texto de carregamento
const LoadingText = styled.p`
  margin-left: 15px;
  font-size: 18px;
  color: #666;
  font-weight: bold;
`;

// Container geral da página
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;
// Linha estilizada
const DividerLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: #d1d1d1;
  margin: 20px 0;
`;

// Estilização para a coluna da imagem do produto
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

// Estilização para a coluna de informações do produto
const InfoSection = styled.div`
  flex: 1;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Título do produto
const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// Avaliação do produto com estrelas
const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .stars {
    color: #f39c12;
    display: flex;
  }

  .rating {
    margin-left: 10px;
    font-size: 18px;
  }
`;

// Descrição do produto
const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #666;
  line-height: 1.6;
`;

// Preço do produto com caixa ajustado
const ProductPriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #27ae60;
    border: 2px solid #e0e0e0;
    padding: 5px 15px;
    border-radius: 4px;
    background-color: #f9f9f9;
    margin-right: 10px;
  }
`;

// Botão de comprar estilizado com ícone
const BuyButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #27ae60;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #1f8a4f;
  }
`;

// Box de sensações
const SensationsBox = styled.div`
  margin-top: 50px;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 16px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 20px;
      padding: 10px 20px;
      margin-bottom: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #f0f0f0;
      }
    }

    .description-text {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      font-size: 14px;
      color: #666;
    }
  }

  .right {
    flex: 1;
    padding-left: 40px;
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
`;

// Barra de progresso estilizada
const ProgressBar = styled.div`
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  position: relative;
  margin: 10px 0;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    background-color: #d4af37;
    border-radius: 4px;
    width: ${(props) => props.width || "50%"};
  }
`;

function ProductDescriptionPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  // Função genérica para busca de produtos
  function fetchProducts(productId = null) {
    const accessToken = Cookies.get("access_token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let url = `https://api.spartacusprimetobacco.com.br/api/produtos/`;

    if (productId) {
      url += `${productId}`;
    }

    return fetch(url, requestOptions)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        throw error;
      });
  }

  function addToCart() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Primeiro, cria o carrinho chamando newCart
    newCart().then(() => {
      // Após criar o carrinho, adiciona o item
      const raw = JSON.stringify({
        pedidoCARRINHO: 1,
        usuarioCARRINHO: 1,
        produtoCARRINHO: product.codigoPRODUTO,
        custoCARRINHO: product.custoPRODUTO || 0, // Valor padrão se não houver custo definido
        precoCARRINHO: product.precoPRODUTO,
        quantidadeCARRINHO: 1,
        totalCARRINHO: product.precoPRODUTO * 1,
        nomeProdutoCARRINHO: product.nomePRODUTO,
        ativoCARRINHO: true,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://api.spartacusprimetobacco.com.br/api/itens-carrinho",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCartItems(cartItems + 1); // Incrementa os itens no carrinho
        })
        .catch((error) => console.error(error));
    });
  }

  function newCart() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      usuarioCARRINHO: 1,
      localizacaoPEDIDO: "São Paulo",
      preferenciaPEDIDO: "Nenhuma",
      referenciaexternaPEDIDO: "REF12345",
      tituloPEDIDO: "Pedido Exemplo",
      documentoPEDIDO: "12345678900",
      areaTelefonePEDIDO: "11",
      telefonePEDIDO: "987654321",
      nomePEDIDO: "João",
      sobrenomePEDIDO: "Silva",
      emailPEDIDO: "joao@example.com",
      ruaPEDIDO: "Rua Exemplo",
      numeroPEDIDO: "123",
      complementoPEDIDO: "Apto 45",
      cepPEDIDO: "01000-000",
      bairroPEDIDO: "Centro",
      precoPEDIDO: 100,
      fretePEDIDO: 10,
      totalPEDIDO: 110,
      linhaPEDIDO: 1,
      statusPEDIDO: 0,
      linkPagamentoPEDIDO: "http://pagamento.com/link",
      datacriacaoPEDIDO: new Date().toISOString(),
      funcionarioPEDIDO: 2,
      recebidoPEDIDO: new Date().toISOString(),
      recebimentoPEDIDO: 1,
      ativoPEDIDO: true,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      "https://api.spartacusprimetobacco.com.br/api/carrinho",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  useEffect(() => {
    fetchProducts(id)
      .then((result) => {
        if (result && result.codigoPRODUTO === parseInt(id)) {
          setProduct(result);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar o produto:", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

    // Carrega lista de produtos relacionados
    fetchProducts()
      .then((result) => setProducts(result))
      .catch((error) =>
        console.error("Erro ao carregar produtos relacionados:", error)
      );
  }, [id]);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [products]);

  if (loading) {
    return (
      <LoadingScreen>
        <Spinner />
        <LoadingText>Carregando...</LoadingText>
      </LoadingScreen>
    );
  }

  if (error || !product) {
    return <div><NotFound /></div>;
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <Container>
        <ImageSection>
          <img src={product.imagemPRODUTO} alt={product.nomePRODUTO} />
        </ImageSection>
        <InfoSection>
          <ProductTitle>{product.nomePRODUTO}</ProductTitle>
          <ProductRating>
            <div className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <span className="rating">4.5 - Avaliação do produto</span>
          </ProductRating>
          <ProductDescription>{product.descricaoPRODUTO}</ProductDescription>
          <ProductPriceBox>
            <span className="price">
              R$ {Number(product.precoPRODUTO).toFixed(2)}
            </span>

            <BuyButton onClick={addToCart}>
              <FaShoppingCart />
              Comprar
            </BuyButton>
          </ProductPriceBox>

          <DividerLine />
        </InfoSection>
      </Container>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 25,
        }}
      >
        <SensationsBox>
          <div className="left">
            <button>Loren Ipsum</button>
            <span>Loren - Loren - Loren</span>
            <button>Loren Ipsum</button>
            <div className="description-text">
              <span>Calmante</span>
              <span>Energizante</span>
            </div>
            <ProgressBar width="60%" />
            <div className="description-text">
              <span>Baixo THC</span>
              <span>Alto THC</span>
            </div>
            <ProgressBar width="40%" />
          </div>
          <div className="right">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </SensationsBox>
      </div>

      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          marginLeft: 25,
          marginBottom: 20,
        }}
      >
        <CarouselWeekContainer style={{ marginLeft: 35 }}>
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
                      id={product.codigoPRODUTO}
                      name={product.nomePRODUTO}
                      price={product.precoPRODUTO}
                      unit="unidade"
                      image={product.imagemPRODUTO}
                    />
                  </motion.div>
                ))}
              </CarouselProductList>
            </motion.div>
          </motion.div>
        </CarouselWeekContainer>
      </div>
      <FooterFAQ />
    </>
  );
}

export default ProductDescriptionPage;
