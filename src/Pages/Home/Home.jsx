
import Header from "../Shared/Header/Header";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavBar from "../Shared/RightSideNavBar.jsx/RightSideNavBar";
import BreakingNews from "./BreakingNews";
import Marquee from "react-fast-marquee";

import { useState } from "react";

const Home = () => {
  const [allData, setAllData] = useState([]);
  fetch("./categories.json")
    .then((response) => response.json())
    .then((category) => setAllData(category));
  return (
    <div className="">
      <Header />
      <div className="flex justify-center items-center p-4 border-2 gap-6">
        <BreakingNews />
        <Marquee pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className="border-4 flex flex-col items-center  gap-3">
        {
  allData.map(category => (
    <LeftSideNavbar key={category.id} category={category} />
  ))
}

        </div>
        <div className="md:col-span-2 border-4">
          <h2>News coming soon</h2>
        </div>
        <div className="border-4">
         <RightSideNavBar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
