
import useFetch from '../restDataService/useFetch';

const url = 'https://api.realworld.io/api//articles/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863';


export  const Content = () => {

    const { data, loading, error, refetch} = useFetch(url); 

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div>

        <div className="bg-slate-200">{data?.article.title}</div>

        <button onClick={refetch}> Refetch</button>

    </div>
    )
}
export default Content;