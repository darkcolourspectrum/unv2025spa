// src/components/Pagination/Pagination.styles.js
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.$active ? 'white' : '#495057'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover:not(:disabled) {
    color: ${props => props.$active ? 'white' : '#667eea'};
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PaginationInfo = styled.div`
  margin: 0 1rem;
  font-size: 0.875rem;
  color: #7f8c8d;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
  }
`;