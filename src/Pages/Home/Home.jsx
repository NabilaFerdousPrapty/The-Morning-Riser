import Header from "../Shared/Header/Header";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavBar from "../Shared/RightSideNavBar.jsx/RightSideNavBar";


const Home = () => {
    return (
        <div className=" text-5xl">
            <Header/>
            <Navbar/>
            <h1 className="">Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNavbar/>
                </div>
                <div className="col-span-2">
                    <h2>News coming soon</h2>
                </div>
                <div>
                    <RightSideNavBar/>
                </div>
            </div>
        </div>
    );
};

export default Home;