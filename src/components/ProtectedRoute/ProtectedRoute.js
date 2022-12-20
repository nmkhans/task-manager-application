import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    
    if(!token) {
        return <Navigate to="/login" replace={true} />
    } else {
        return children;
    }
}

export default ProtectedRoute;