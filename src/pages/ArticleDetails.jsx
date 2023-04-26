import { useParams, useNavigate } from 'react-router-dom';
import SingleArticle from '../components/SingleArticle';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const ArticleDetails = () => {
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  let url = `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles/${id}`;

  const { data: article, error, isLoading } = useFetch(url);

  const handleDelete = () => {
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      {error && { error }}
      {isLoading && <div>Loading....</div>}
      {article && (
        <SingleArticle
          article={article}
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
          edit={edit}
        />
      )}
    </>
  );
};

export default ArticleDetails;
