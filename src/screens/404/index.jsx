import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 5rem;
  color: #ff6b6b;
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 40px;
`;

const HomeButton = styled(Link)`
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #388e3c;
    transform: translateY(-3px);
  }
`;

const Icon = styled(FaHome)`
  margin-right: 8px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Oops! A página que você está procurando não foi encontrada.</NotFoundText>
      <HomeButton to="/home">
        <Icon />
        Voltar para a Home
      </HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
