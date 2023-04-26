const SingleArticle = ({ article }) => {
  return (
    <article>
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{article.description}</p>

      <div className="button-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </article>
  );
};

export default SingleArticle;
