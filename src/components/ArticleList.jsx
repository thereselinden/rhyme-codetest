const ArticleList = ({ articles }) => {
  return (
    <div className="article-preview" key={articles.id}>
      {articles.map(article => (
        <>
          <h2>{article.title}</h2> <p>Author: {article.author}</p>{' '}
          <p>Description: {article.description}</p>
        </>
      ))}
    </div>
  );
};

export default ArticleList;
