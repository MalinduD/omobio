import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import View from './components/View';
import Register from './components/Register';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/'} className="navbar-brand">MyApp</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to={'/'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={''} className="nav-link">View</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/register'} className="nav-link">Register</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/view' component={View}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
          </Switch>

      </div>
    </Router>
    );
}

export default App;
