import { Link } from "react-router-dom";


const LeftSideNavbar = ({category}) => {
    const {name}=category;
    return (
        <div>
           <Link className="btn bg-[#E7E7E7] text-[#403F3F] hover:text-black hover:w-[267px]">{name}</Link>
        </div>
    );
};

export default LeftSideNavbar;