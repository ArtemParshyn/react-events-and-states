import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import RegisterPage from './pages/RegisterPage'; // Импортируйте новый компонент

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<RegisterPage />} /> {/* Добавьте маршрут для регистрации */}
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
