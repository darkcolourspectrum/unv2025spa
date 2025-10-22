// src/store/slices/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { newsAPI } from '../../services/newsAPI';

// Асинхронные действия
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ query = '', category = '', page = 1 }, { rejectWithValue }) => {
    try {
      const response = await newsAPI.getNews({ query, category, page });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewsById = createAsyncThunk(
  'news/fetchNewsById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await newsAPI.getNewsById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  articles: [],
  currentArticle: null,
  loading: false,
  error: null,
  searchQuery: '',
  selectedCategory: '',
  currentPage: 1,
  totalPages: 1,
  totalResults: 0,
  categories: [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Сброс страницы при новом поиске
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1; // Сброс страницы при новой категории
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentArticle: (state) => {
      state.currentArticle = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Загрузка новостей
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalPages = action.payload.totalPages;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Загрузка отдельной новости
      .addCase(fetchNewsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentArticle = action.payload;
      })
      .addCase(fetchNewsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setCurrentPage,
  clearError,
  clearCurrentArticle
} = newsSlice.actions;

export default newsSlice.reducer;