import Routes from './Routes/Router'
import { AuthProvider } from './Contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

export default App;
