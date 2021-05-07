// Usuario
import './App.css';
import { JoinPage } from './pages/PagesUser/JoinPage';
import { SignUpPage } from './pages/PagesUser/SignUpPage';
import { LogInPage } from './pages/PagesUser/LogInPage';
import { Profile } from './pages/PagesUser/Profile';

// Busqueda
import { FridgePage } from './pages/PagesSearch/FridgePage';
import { SayNotPage } from './pages/PagesSearch/SayNotPage';
import { MorePage } from './pages/PagesSearch/MorePage';
import { SelectionPage } from './pages/PagesSearch/SelectionPage.jsx';
import { MainPage } from './pages/PagesSearch/MainPage';
import { FavsPage } from './pages/PagesSearch/FavsPage';
import { InitPage } from './pages/PagesSearch/InitPage';


// Busqueda - Recetas
import { DetailPage } from './pages/PagesSearch/DetailPage';
import { MasterPage } from './pages/PagesSearch/MasterPage';

import { useState } from 'react'
import { LoggedProvider } from './context/loggedContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";






function App() {
  const [logged, setLogged] = useState(true)
  return (
    <div className="App">
      
      <LoggedProvider value={{logged, setLogged}}>
          <Router>
            <Switch>
              {/* SEARCH */}
                  <Route exact path="/" component={ InitPage } />
                  <Route exact path="/nevera" component={ FridgePage } />
                  <Route exact path="/noquiero" component={ SayNotPage } />
                  <Route exact path="/more" component={ MorePage } />
                  <Route exact path="/seleccion" component={ SelectionPage } />
                  <Route exact path="/horario" component={ MainPage } />
                  <Route exact path="/favoritos" component={ FavsPage } />

                  <Route exact path="/recetas" component={ MasterPage } />
                  <Route exact path="/receta-detalle" component={ DetailPage } />



              {/* USER */}
                  <Route exact path="/signup" component={ SignUpPage } />
                  <Route exact path="/login" component={ LogInPage } />
                  <Route exact path="/join" component={ JoinPage } />
                  <Route exact path="/profile" component={ Profile } />
          </Switch>
          </Router>
      </LoggedProvider>



    </div>
  );
}

export default App;
