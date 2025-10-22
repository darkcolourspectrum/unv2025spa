import styled from 'styled-components';

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;