import PropTypes from 'prop-types'; // Importe o PropTypes
import { Link } from 'react-router-dom';
import { BreadcrumbContainer, BreadcrumbItem } from './styles';

const Breadcrumb = ({ items = [] }) => {
  return (
    <BreadcrumbContainer>
      {items.length > 0 ? (
        items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.link ? <Link to={item.link}>{item.label}</Link> : <span>{item.label}</span>}
            {index < items.length - 1 && ' > '}
          </BreadcrumbItem>
        ))
      ) : (
        <span>Navegação não disponível</span>
      )}
    </BreadcrumbContainer>
  );
};

// Adiciona a validação das props
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

export default Breadcrumb;
