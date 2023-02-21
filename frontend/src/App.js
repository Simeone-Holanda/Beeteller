import NabBar from './components/NabBar/NabBar';
import AppRoutes from './routes';
import AuthProvider from './contexts/AuthContext';


function App() {


  return (
    <div>
      <NabBar />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
