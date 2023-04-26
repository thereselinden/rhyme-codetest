import { useParams } from 'react-router-dom';
import SingleArticle from '../components/SingleArticle';
import useFetch from '../hooks/useFetch';

const ArticleDetails = () => {
  const { id } = useParams();

  const {
    data: article,
    error,
    isLoading,
  } = useFetch(
    `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles/${id}`
  );

  return (
    <>
      {error && { error }}
      {isLoading && <div>Loading....</div>}
      {article && <SingleArticle article={article} />}
    </>
  );
};

export default ArticleDetails;
