import { useState } from 'react';
import {
  FilterContainer,
  SearchBar,
  CategorySection,
  CategoryItem,
  PriceFilter,
  PriceRange,
  PriceLabel,
} from './styles'; // Estilos atualizados

function FilterSidebar() {
  const [priceValue, setPriceValue] = useState(80);

  // Função para atualizar o valor e o gradiente do range
  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <FilterContainer>
      {/* Barra de Busca */}
      <SearchBar type="text" placeholder="Buscar por produto" />

      {/* Categoria */}
      <CategorySection>
        <h3>Categoria</h3>
        <div>
          <CategoryItem>
            <img src="/img/camisa-black.png" alt="Produto" />
            <p>Produto</p>
          </CategoryItem>
          <CategoryItem>
            <img src="/img/camisa-black.png" alt="Produto" />
            <p>Produto</p>
          </CategoryItem>
          <CategoryItem>
            <img src="/img/camisa-black.png" alt="Produto" />
            <p>Produto</p>
          </CategoryItem>
          <CategoryItem>
            <img src="/img/camisa-black.png" alt="Produto" />
            <p>Produto</p>
          </CategoryItem>
          <CategoryItem>
            <img src="/img/camisa-black.png" alt="Produto" />
            <p>Produto</p>
          </CategoryItem>
          <CategoryItem>
            <img src="/img/camisa-black.png" alt="Produto" />
            <p>Produto</p>
          </CategoryItem>
        </div>
      </CategorySection>

      {/* Filtro de Preço */}
      <PriceFilter>
        <h3>Filtro de preço</h3>
        <PriceRange>
          <input
            type="range"
            min="80"
            max="400"
            value={priceValue}
            onChange={handlePriceChange}
            style={{
              background: `linear-gradient(to right, #d6a700 ${((priceValue - 80) / (400 - 80)) * 100}%, #ddd 0%)`,
            }}
          />
        </PriceRange>
        <div>
          <PriceLabel>R$ 80</PriceLabel>
          <PriceLabel>R$ {priceValue}</PriceLabel>
        </div>
      </PriceFilter>
    </FilterContainer>
  );
}

export default FilterSidebar;
