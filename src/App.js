import './App.css';
import Layout from './components/Layout/Layout';
import { UserProvider } from './context/UserContext';
import RoutesComponent from './routes/Routes';


function App() {
  return (
    <UserProvider>
      <Layout >
        <h1>My App</h1>
        <RoutesComponent />
      </Layout>
    </UserProvider>
  );
}

export default App;
