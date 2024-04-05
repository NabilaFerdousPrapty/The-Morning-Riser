import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNavBar from "../Shared/RightSideNavBar.jsx/RightSideNavBar";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams(); 
  
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
                Photography
              </a>
            </div>
            <p>{id}</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?4"
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-indigo-600">
                  Facere ipsa nulla corrupti praesentium pariatur architecto
                </h3>
              </a>
              <p className="leading-snug text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Repellat, excepturi.
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
