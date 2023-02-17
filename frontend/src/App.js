import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NabBar from './components/NabBar/NabBar';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <NabBar />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
