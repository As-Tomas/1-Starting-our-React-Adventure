import useFetch from "../restDataService/useFetch";
import avatar from "../../assets/demo-avatar.png";
import hearth from "../../assets/hearth.png";
import JustDate from "./Helpers/DateConverte";

const url = "https://api.realworld.io/api//articles";

export const ContentList = () => {
  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div>
      <div className="bg-green-500 inset-0 drop-shadow py-6">
        <div className="text-white flex flex-col items-center ">
          <h1 className="text-6xl font-bold">conduit</h1>
          <p className=" m-4 text-xl ">A place to share your knowledge.</p>
        </div>
      </div>
      <div className=" grid-cols-2 ">
        <div className="flex flex-row justify-center  ">
          <div className="w-3/4 py-6 mx-8 max-w-5xl divide-y  divide-gray-300">
            <div className=" border-b ">
              <a
                className=" px-8 inline-block py-2 border-b-2 border-green-500  text-green-500 font-normal "
                href="#"
              >
                Global Feed
              </a>
            </div>
            {data?.articles.map((article) => (
              <div key={article.slug}>
                <div className="flex flex-row justify-between  ">
                  <div className="flex flex-row items-center ">
                    <img
                      className=" rounded-full w-12 m-4"
                      src={avatar}
                      alt="avatar"
                    />
                    <div className="flex flex-col">
                      <a
                        className="text-green-500 hover:text-green-600 font-bold "
                        href="#"
                      >
                        {article.author.username}
                      </a>
                      <span className="text-gray-500 text-opacity-40">
                      <JustDate dateTime={article.createdAt}/>
                        </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center ">
                    <div>
                      <button className=" flex items-center rounded-lg py-2 px-4 border-2 border-green-600 text-green-500">
                        <img className="w-6 h-6" src={hearth} alt="heath" />
                        {article.favoritesCount}
                      </button>
                    </div>
                  </div>
                </div>
                <h1 className=" text-xl  font-bold">{article.title}</h1>
                <p>{article.description}</p>
                <span className="flex py-4 text-gray-500 text-opacity-30">
                  <span>Read more...</span>
                  <ul className=" flex flex-row ml-auto">
                    {article.tagList.map((tag) => (
                      <li
                        className=" border rounded-full px-2 mx-1 text-gray-500 text-opacity-40 border-gray-500 border-opacity-30  "
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            ))}
          </div>

          <div className="my-8 text-lg rounded-lg p-2 ">
            <div className="bg-gray-200 max-w-fit max-h-fit">
                Popular Tags
            </div>
            
          </div>
        </div>
      </div>

      <button className="border rounded-lg px-4" onClick={refetch}> Refetch</button>
    </div>
  );
};
export default ContentList;
