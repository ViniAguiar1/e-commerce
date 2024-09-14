import PropTypes from 'prop-types';
import { ProductCard, ProductImage, ProductName, ProductPrice } from './styles';

const Product = ({ name, price, unit, image }) => {
  return (
    <ProductCard>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}/{unit}</ProductPrice>
    </ProductCard>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
