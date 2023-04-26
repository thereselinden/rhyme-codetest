import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('therese');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const article = {
      title,
      description,
      author,
      body,
    };

    fetch('http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    }).then(() => {
      console.log('new article added');
      navigate('/');
    });
  };

  return (
    <div className="create">
      <h2>Create new article</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
          id="title"
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
          id="description"
        />

        <label htmlFor="author">Author</label>
        <select
          value={author}
          id="author"
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="therese">Therese</option>
          <option value="kalle">Kalle</option>
          <option value="anka">Anka</option>
        </select>

        <label htmlFor="body">Body</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={e => setBody(e.target.value)}
          id="description"
        />

        <button>Add article</button>
      </form>
    </div>
  );
};

export default CreateArticle;
