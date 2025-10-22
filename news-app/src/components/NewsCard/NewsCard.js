import React, { useState } from 'react';
import {
  CardLink,
  CardContainer,
  NewsImage,
  NewsContent,
  NewsTitle,
  NewsDescription,
  NewsMeta,
  NewsSource,
  NewsDate,
  CategoryTag,
  ImagePlaceholder
} from './NewsСard.styles';

const NewsCard = ({ article }) => {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <CardLink to={`/news/${article.id}`}>
      <CardContainer>
        {article.urlToImage && !imageError ? (
          <NewsImage
            src={article.urlToImage}
            alt={article.title}
            onError={handleImageError}
          />
        ) : (
          <ImagePlaceholder>
            <div className="placeholder-content">
              <div className="news-icon">📰</div>
              <span>Изображение недоступно</span>
            </div>
          </ImagePlaceholder>
        )}
        
        <NewsContent>
          <NewsTitle>
            {truncateText(article.title, 80)}
          </NewsTitle>
          
          <NewsDescription>
            {truncateText(article.description, 120)}
          </NewsDescription>
          
          <NewsMeta>
            <NewsSource>
              {article.source?.name || 'Источник неизвестен'}
            </NewsSource>
            <NewsDate>
              {formatDate(article.publishedAt)}
            </NewsDate>
          </NewsMeta>
          
          {article.category && (
            <CategoryTag>
              {article.category}
            </CategoryTag>
          )}
        </NewsContent>
      </CardContainer>
    </CardLink>
  );
};

export default NewsCard;