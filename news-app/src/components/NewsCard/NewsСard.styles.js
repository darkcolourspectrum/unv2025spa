// src/components/NewsCard/NewsCard.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CardContainer = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;

  .placeholder-content {
    text-align: center;
    
    .news-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      display: block;
    }
    
    span {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;

export const NewsContent = styled.div`
  padding: 1.5rem;
`;

export const NewsTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2c3e50;
  line-height: 1.4;
`;

export const NewsDescription = styled.p`
  color: #7f8c8d;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #95a5a6;
`;

export const NewsSource = styled.span`
  font-weight: 500;
  color: #667eea;
`;

export const NewsDate = styled.span`
  color: #95a5a6;
`;

export const CategoryTag = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  display: inline-block;
  margin-top: 0.75rem;
`;

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