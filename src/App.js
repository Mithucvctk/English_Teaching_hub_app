import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Home from "./Components/home.js"
import Signin from './Components/Signin/signin.js';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
