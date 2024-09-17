// Banner.js
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 240px;
  background-color: #1c1c1c;
  border-radius: 0.275rem;
`;

const BannerText = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
`;

const BannerButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerText>BANNER</BannerText>
      <BannerButton>Comprar agora</BannerButton>
    </BannerContainer>
  );
};

export default Banner;
