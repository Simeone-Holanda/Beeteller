import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoutes = () => {
    const { checkLoggedInUser } = useContext(AuthContext)
    return checkLoggedInUser() ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;