import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Login from './component/Login';
import Signup from './component/Signup';
import {Route,Switch,Link} from 'react-router-dom'
import Dashboard from './component/Dashboard';
import HomePage from './component/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route exact path="/dashboard" render={()=> <Dashboard />} />
        <Route>
            <div>Error 404 </div>
            <Link to="/">GO BACK HOME</Link>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
