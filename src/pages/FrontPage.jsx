import ArticleList from '../components/ArticleList';
import useFetch from '../hooks/useFetch';

const FrontPage = () => {
  const {
    data: articles,
    error,
    isLoading,
  } = useFetch(
    'http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles'
  );
  console.log('articleData', articles);
  return (
    <>
      <h1>This is frontpage</h1>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {articles && <ArticleList articles={articles} />}
    </>
  );
};

export default FrontPage;
