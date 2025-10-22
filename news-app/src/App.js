import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/HomePage/HomePage';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="app-header">
            <div className="container">
              <h1 className="app-title">News Portal</h1>
              <p className="app-subtitle">Stay informed with the latest news</p>
            </div>
          </header>
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news/:id" element={<NewsDetail />} />
            </Routes>
          </main>
          
          <footer className="app-footer">
            <div className="container">
              <p>&copy; 2025 News Portal.</p>
            </div>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;