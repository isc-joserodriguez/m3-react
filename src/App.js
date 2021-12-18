import './App.css';
import Layout from './components/Layout/Layout';
import { UserProvider } from './context/UserContext';
import RoutesComponent from './routes/Routes';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



function App() {
  return (
    <UserProvider>
      <PayPalScriptProvider option={{"client-id":"AZt8WT6Qb8mExbz9JQWg8OwBCxZIk5WoDUJjFfDe2ju2trBAM9jYPHg9RqQfzD4f0HHPKguA74RPaCXf"}}>
        <Layout >
          <h1>My App</h1>
          <RoutesComponent />
        </Layout>
      </PayPalScriptProvider>
    </UserProvider>
  );
}

export default App;
