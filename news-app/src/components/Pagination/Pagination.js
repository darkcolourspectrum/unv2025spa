import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/slices/newsSlice';
import {
  PaginationContainer,
  PaginationButton,
  PaginationInfo
} from './Pagination.styles';

const Pagination = ({ currentPage, totalPages, totalResults }) => {
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      dispatch(setCurrentPage(page));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 5; 
    
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);
    
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationContainer>
      {/* Кнопка "Первая страница" */}
      {currentPage > 1 && (
        <PaginationButton
          onClick={() => handlePageChange(1)}
        >
          Первая
        </PaginationButton>
      )}
      
      {/* Кнопка "Предыдущая" */}
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </PaginationButton>

      {/* Номера страниц */}
      {getPageNumbers().map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          $active={currentPage === pageNumber}
        >
          {pageNumber}
        </PaginationButton>
      ))}

      {/* Кнопка "Следующая" */}
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Далее
      </PaginationButton>

      {/* Кнопка "Последняя страница" */}
      {currentPage < totalPages && (
        <PaginationButton
          onClick={() => handlePageChange(totalPages)}
        >
          Последняя
        </PaginationButton>
      )}

      {/* Информация о результатах */}
      <PaginationInfo>
        Страница {currentPage} из {totalPages}
        {totalResults > 0 && (
          <span><br />Найдено: {totalResults} новостей</span>
        )}
      </PaginationInfo>
    </PaginationContainer>
  );
};

export default Pagination;