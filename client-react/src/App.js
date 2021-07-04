import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './views/about';
import Login from './views/login';
import List from './views/list';
import Detail from './views/detail';
import './App.css';

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <About />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/detail:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
