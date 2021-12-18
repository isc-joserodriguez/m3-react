import './App.css';
import Layout from './components/Layout/Layout';
import RoutesComponent from './routes/Routes';

// Importo Provider
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <UserProvider>
      <Layout>
        <h1>My App</h1>
        <RoutesComponent />
      </Layout>
    </UserProvider>
  );
}

export default App;
