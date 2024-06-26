import { Link } from "react-router-dom";

import userImg from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";

const Navbar = () => {
 const {user,logOut}=useContext(AuthContext);
 const handleSignOut=()=>{
  logOut()
  .then(result=>console.log(result))
  .catch(error=>console.log(error))
 }
 
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/career'> Career</Link></li>
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/career'> Career</Link></li>
   
      
    </ul>
  </div>
  <div className="navbar-end gap-3">
   
   {
    user? <div className="flex justify-between gap-4">
      <button onClick={handleSignOut} className="btn">Signout</button>
      <img src={userImg} alt="" className="w-10" />
    </div>
    : <Link to='/login' className="btn">Log in</Link>
   }
  </div>
</div>
    );
};

export default Navbar;