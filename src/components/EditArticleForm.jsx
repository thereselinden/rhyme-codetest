import { useState } from 'react';

const EditArticleForm = ({ article }) => {
  const [value, setValue] = useState({
    title: article.title,
    description: article.description,
    author: article.author,
    body: article.body,
  });

  //TODO Tyvärr - fick inte denna att fungera - state uppdateras inte med nya värden
  const handleSubmit = e => {
    e.preventDefault();

    fetch(
      `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/${article.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: value.title,
          description: value.description,
          author: value.author,
          body: value.body,
        }),
      }
    ).then(() => {
      console.log('article updated');
    });
  };

  return (
    <>
      <div className="update">
        <h2>Update article</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            value={value.title}
            onChange={e => setValue(e.target.value)}
            id="title"
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            required
            value={value.description}
            onChange={e => setValue(e.target.value)}
            id="description"
          />

          <label htmlFor="author">Author</label>
          <select
            value={value.author}
            id="author"
            onChange={e => setValue(e.target.value)}
          >
            <option value="therese">Therese</option>
            <option value="kalle">Kalle</option>
            <option value="anka">Anka</option>
          </select>

          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            required
            value={value.body}
            onChange={e => setValue(e.target.value)}
            id="description"
          />

          <button>Update article</button>
        </form>
      </div>
    </>
  );
};
export default EditArticleForm;
