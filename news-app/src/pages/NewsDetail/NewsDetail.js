// src/pages/NewsDetail/NewsDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsById, clearCurrentArticle } from '../../store/slices/newsSlice';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import {
  BackButton,
  NewsDetailContainer,
  NewsDetailImage,
  NewsDetailContent,
  NewsDetailTitle,
  NewsDetailMeta,
  NewsDetailSource,
  NewsDetailAuthor,
  NewsDetailDate,
  NewsDetailDescription,
  NewsDetailText,
  ExternalLinkContainer,
  ExternalLink
} from './NewsDetail.styles';

const NewsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentArticle, loading, error } = useSelector((state) => state.news);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchNewsById(id));
    }

    // Очистка при размонтировании компонента
    return () => {
      dispatch(clearCurrentArticle());
    };
  }, [dispatch, id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) {
    return (
      <div className="container">
        <BackButton to="/">
          Назад к новостям
        </BackButton>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <BackButton to="/">
          Назад к новостям
        </BackButton>
        <div className="error-message">
          <p>Ошибка загрузки новости: {error}</p>
        </div>
      </div>
    );
  }

  if (!currentArticle) {
    return (
      <div className="container">
        <BackButton to="/">
          Назад к новостям
        </BackButton>
        <div className="error-message">
          <p>Новость не найдена</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <BackButton to="/">
        Назад к новостям
      </BackButton>
      
      <NewsDetailContainer>
        {currentArticle.urlToImage && !imageError && (
          <NewsDetailImage
            src={currentArticle.urlToImage}
            alt={currentArticle.title}
            onError={handleImageError}
          />
        )}
        
        <NewsDetailContent>
          <NewsDetailTitle>{currentArticle.title}</NewsDetailTitle>
          
          <NewsDetailMeta>
            <NewsDetailSource>
              <strong>Источник:</strong> {currentArticle.source?.name || 'Неизвестный источник'}
              {currentArticle.author && (
                <NewsDetailAuthor>
                  {' • '}{currentArticle.author}
                </NewsDetailAuthor>
              )}
            </NewsDetailSource>
            <NewsDetailDate>
              {formatDate(currentArticle.publishedAt)}
            </NewsDetailDate>
          </NewsDetailMeta>

          {currentArticle.description && (
            <NewsDetailDescription>
              <p>{currentArticle.description}</p>
            </NewsDetailDescription>
          )}

          <NewsDetailText>
            {currentArticle.content ? (
              <div>
                {currentArticle.content.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index}>
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            ) : (
              <p>Полный текст статьи недоступен.</p>
            )}
          </NewsDetailText>

          {currentArticle.url && (
            <ExternalLinkContainer>
              <ExternalLink
                href={currentArticle.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Читать полную статью
              </ExternalLink>
            </ExternalLinkContainer>
          )}
        </NewsDetailContent>
      </NewsDetailContainer>
    </div>
  );
};

export default NewsDetail;