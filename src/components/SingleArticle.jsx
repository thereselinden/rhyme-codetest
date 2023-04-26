import EditArticleForm from './EditArticleForm';

const SingleArticle = ({ article, onDeleteClick, onEditClick, edit }) => {
  return (
    <>
      {edit ? (
        <EditArticleForm article={article} />
      ) : (
        <article className="single-article">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <p>{article.description}</p>

          <div className="button-container">
            <button onClick={onEditClick}>Edit</button>
            <button onClick={onDeleteClick}>Delete</button>
          </div>
        </article>
      )}
    </>
  );
};

export default SingleArticle;
