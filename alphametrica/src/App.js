import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import gradation from './img/gradation.png'
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Account from './components/Account';

function App() {
  return (
    <div className="container">
      <header className="header-title">
        <img src={gradation}></img>
      </header>
      {/* switching components */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
