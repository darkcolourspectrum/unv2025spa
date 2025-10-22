import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  border: none;

  &:focus {
    background: #e9ecef;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }

  &::placeholder {
    color: #6c757d;
  }
`;

export const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ClearButton = styled(SearchButton)`
  background: #e74c3c;

  &:hover {
    background: #c0392b;
  }
`;

export const SearchStatus = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  
  small {
    color: #6c757d;
    
    strong {
      color: #495057;
    }
  }
`;