import { Navigate } from "react-router-dom";
import cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
    const token = cookies.get("accessToken");
    
    if(!token) {
        return <Navigate to="/login" replace={true} />
    } else {
        return children;
    }
}

export default ProtectedRoute;