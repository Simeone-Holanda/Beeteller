import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrivateRoutes;