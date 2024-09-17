// Card.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  width: 30%;
  padding: 20px;
  margin: 5px; /* Reduz a margem para diminuir o espaço entre os cards */
  border: 1px solid #ff0000;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
`;

const Card = ({ title, text }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;
