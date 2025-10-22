import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: transform 0.2s ease;
  margin-bottom: 2rem;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    color: white;
    text-decoration: none;
  }
`;

export const NewsDetailContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const NewsDetailImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const NewsDetailContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const NewsDetailTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const NewsDetailMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #e1e8ed;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

export const NewsDetailSource = styled.div`
  font-weight: 500;
  color: #667eea;
`;

export const NewsDetailAuthor = styled.span`
  font-weight: 500;
  color: #667eea;
`;

export const NewsDetailDate = styled.div`
  color: #95a5a6;
`;

export const NewsDetailDescription = styled.div`
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

export const NewsDetailText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1rem;
  }
`;

export const ExternalLinkContainer = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #e1e8ed;
  }
`;

export const ExternalLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: transform 0.2s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    color: white;
    text-decoration: none;
  }
`;