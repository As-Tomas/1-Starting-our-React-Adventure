import useFetch from '../restDataService/useFetch';

const url = 'https://api.realworld.io/api//articles';


export  const ContentList = () => {

    const { data, loading, error, refetch} = useFetch(url); 

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div>

{data?.articles.map((article) => (
        <div key={article.slug}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
<button onClick={refetch}> Refetch</button>
    </div>
    )
}
export default ContentList;