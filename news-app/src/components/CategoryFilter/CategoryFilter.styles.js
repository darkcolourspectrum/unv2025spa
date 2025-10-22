// src/components/CategoryFilter/CategoryFilter.styles.js
import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

export const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.$active ? 'white' : '#495057'};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    color: ${props => props.$active ? 'white' : '#667eea'};
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transform: translateY(-1px);
  }
`;

export const CategoryStatus = styled.div`
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  
  small {
    color: #6c757d;
    
    strong {
      color: #495057;
    }
  }
`;