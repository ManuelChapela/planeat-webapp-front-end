// Import AppRputer
import { JoinPage } from './pages/PagesUser/JoinPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
          <Route exact path="/" component={ JoinPage } />
      </Switch>
      </Router>


    </div>
  );
}

export default App;
