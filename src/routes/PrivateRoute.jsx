import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
   const {user,loading}=useContext(AuthContext);
   const location=useLocation();
   console.log(location.pathname);
   if (loading) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>;
   }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;