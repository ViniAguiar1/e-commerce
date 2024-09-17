// AvisosImportantes.js
import styled from 'styled-components';
import Card from '../alertCard//Card';

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;

  &::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 24px;
    background-color: red;
    margin-right: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap; /* Garante que os cards fiquem lado a lado */
  gap: 20px; /* Adiciona um espaço fixo entre os cards */
  @media (max-width: 900px) {
    flex-wrap: wrap; /* Em telas menores, os cards vão se reorganizar verticalmente */
  }
`;

const AvisosImportantes = () => {
  return (
    <Container>
      <Title>Avisos importantes</Title>
      <CardContainer>
        <Card
          title="Novos Endereços"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        />
        <Card
          title="Indicações"
          text="Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Card
          title="Pagamentos via cartão"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        />
      </CardContainer>
    </Container>
  );
};

export default AvisosImportantes;
