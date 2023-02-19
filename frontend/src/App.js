import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NabBar from './components/NabBar/NabBar';
import { AuthContext } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import PrivateRoutes from './routes/private.routes';
import PublicRoutes from './routes/public.routes';


function App() {
  const { auth, setAuth } = useContext(AuthContext)

  return (
    <div>
      <NabBar />
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  );
}

export default App;
