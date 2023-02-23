import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./private.routes";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/dashboard' element={<PrivateRoutes />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;