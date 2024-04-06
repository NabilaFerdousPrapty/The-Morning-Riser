import { useParams,useLoaderData} from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNavBar from "../Shared/RightSideNavBar.jsx/RightSideNavBar";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
 

  const {id } = useParams(); 
  console.log(id);
  console.log(typeof(id));
  
  const news=useLoaderData();
  console.log(news);
  const oneNews = news.find((article) => article._id === id);

  console.log(oneNews);
  

  //  const singleNews = news[id];
  //  console.log(singleNews);
  return (
    <>
      <Header />
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 grid-col-1 pt-10">
        <div className="w-full p-4 shadow-md bg-gray-50 text-gray-800 col-span-3 ">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="mb-0 capitalize text-gray-800"
              >
                
              </a>
            </div>
            <p>
              {/* {newsid} */}
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={oneNews.thumbnail_url}
                alt=""
                className="block object-cover object-center  rounded-md w-full h-3/4 bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-indigo-600">
                 {oneNews.title}
                </h3>
              </a>
              <p className="leading-snug text-gray-600">
               {oneNews.details}
              </p>
            </div>
          </div>
        </div>
        <div>
          <RightSideNavBar></RightSideNavBar>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
