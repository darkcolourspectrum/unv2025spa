// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setCurrentPage } from '../../store/slices/newsSlice';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  ClearButton,
  SearchStatus
} from './SearchBar.styles';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.news);
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(inputValue.trim()));
    dispatch(setCurrentPage(1)); // Сбрасываем на первую страницу при новом поиске
  };

  const handleClear = () => {
    setInputValue('');
    dispatch(setSearchQuery(''));
    dispatch(setCurrentPage(1));
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Поиск новостей по ключевым словам..."
        />
        <SearchButton
          type="submit"
          disabled={inputValue.trim() === searchQuery}
        >
          Поиск
        </SearchButton>
        {searchQuery && (
          <ClearButton
            type="button"
            onClick={handleClear}
          >
            Очистить
          </ClearButton>
        )}
      </SearchForm>
      
      {searchQuery && (
        <SearchStatus>
          <small>
            Результаты поиска для: <strong>"{searchQuery}"</strong>
          </small>
        </SearchStatus>
      )}
    </SearchContainer>
  );
};

export default SearchBar;