import './App.css';
import{BrowserRouter,Switch,Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import {Login} from '../Login/Login';
import {PasswordRecover} from '../Login/PasswordRecover';

function App() {
 

  return (
    <div className="App">
<BrowserRouter>
  <Switch>
    <Layout>
    <Route exact path={'/'} component={Home}/>
      <Route exact path={'/login'} component={Login}/>
      <Route exact path={'/recovery-password'} component={PasswordRecover}/>
      <Route  component={NotFound}/>
    </Layout>
  </Switch>
</BrowserRouter>
    </div>
  )
}

export default App
