// src/pages/HomePage/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../store/slices/newsSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import NewsCard from '../../components/NewsCard/NewsCard';
import Pagination from '../../components/Pagination/Pagination';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { NewsGrid, LoadingWrapper } from './HomePage.styles';

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    articles,
    loading,
    error,
    searchQuery,
    selectedCategory,
    currentPage,
    totalPages,
    totalResults
  } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({
      query: searchQuery,
      category: selectedCategory,
      page: currentPage
    }));
  }, [dispatch, searchQuery, selectedCategory, currentPage]);

  if (loading && articles.length === 0) {
    return (
      <div className="container">
        <SearchBar />
        <CategoryFilter />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container">
      <SearchBar />
      <CategoryFilter />
      
      {error && (
        <div className="error-message">
          <p>Ошибка загрузки новостей: {error}</p>
        </div>
      )}

      {!loading && articles.length === 0 && !error && (
        <div className="no-results">
          <h3>Новости не найдены</h3>
          <p>
            Попробуйте изменить поисковый запрос или выбрать другую категорию.
          </p>
        </div>
      )}

      {articles.length > 0 && (
        <>
          <NewsGrid>
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </NewsGrid>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
            />
          )}
        </>
      )}

      {loading && articles.length > 0 && (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      )}
    </div>
  );
};

export default HomePage;