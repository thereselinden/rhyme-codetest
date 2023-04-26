import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-preview">
      {articles.map(article => (
        <>
          <div className="article-preview-card" key={article._id}>
            <Link to={`/articles/${article._id}`}>
              <h2>{article.title}</h2> <p>Author: {article.author}</p>
              <p>Description: {article.description}</p>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default ArticleList;
