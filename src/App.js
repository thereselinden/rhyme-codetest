import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import FrontPage from './pages/FrontPage';
import CreateArticle from './pages/CreateArticle';
import ArticleDetails from './pages/ArticleDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
