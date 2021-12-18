import './App.css';
import Layout from './components/Layout/Layout';
import RoutesComponent from './routes/Routes';

// Importo Provider
import { UserProvider } from './context/UserContext';
import { CategoryProvider } from './context/CategoryContext';


function App() {
  return (
    <UserProvider>
      <CategoryProvider>
        <Layout>
          <h1>My App</h1>
          <RoutesComponent />
        </Layout>
      </CategoryProvider>
    </UserProvider>
  );
}

export default App;
