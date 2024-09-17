import PropTypes from 'prop-types';
import { ProductCard, ProductImage, ProductName, ProductPrice } from './styles';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, name, price, unit, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/productsDescription/${id}`);
  };

  return (
    <ProductCard onClick={handleClick}>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}/{unit}</ProductPrice>
    </ProductCard>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
