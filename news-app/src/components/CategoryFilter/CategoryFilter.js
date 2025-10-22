// src/components/CategoryFilter/CategoryFilter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory, setCurrentPage } from '../../store/slices/newsSlice';
import {
  FilterContainer,
  CategoryButtonsContainer,
  CategoryButton,
  CategoryStatus
} from './CategoryFilter.styles';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.news);

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(setCurrentPage(1)); // Сбрасываем на первую страницу при смене категории
  };

  const getCategoryDisplayName = (category) => {
    const categoryNames = {
      general: 'Общие',
      business: 'Бизнес',
      entertainment: 'Развлечения',
      health: 'Здоровье',
      science: 'Наука',
      sports: 'Спорт',
      technology: 'Технологии'
    };
    return categoryNames[category] || category;
  };

  return (
    <FilterContainer>
      <CategoryButtonsContainer>
        <CategoryButton
          onClick={() => handleCategoryChange('')}
          $active={selectedCategory === ''}
        >
          Все новости
        </CategoryButton>
        
        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => handleCategoryChange(category)}
            $active={selectedCategory === category}
          >
            {getCategoryDisplayName(category)}
          </CategoryButton>
        ))}
      </CategoryButtonsContainer>
      
      {selectedCategory && (
        <CategoryStatus>
          <small>
            Категория: <strong>{getCategoryDisplayName(selectedCategory)}</strong>
          </small>
        </CategoryStatus>
      )}
    </FilterContainer>
  );
};

export default CategoryFilter;