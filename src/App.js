// Usuario
import './App.css';
import { JoinPage } from './pages/PagesUser/JoinPage';
import { SignUpPage } from './pages/PagesUser/SignUpPage';
import { LogInPage } from './pages/PagesUser/LogInPage';
import { Profile } from './pages/PagesUser/Profile';

// Preferencias de usuario

import { SayNotProfilePage } from './pages/PagesSearch/SayNotProfilePage';
import { MorePageProfile } from './pages/PagesSearch/MorePageProfile';

  
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

import { useState } from 'react';
import { LoggedProvider } from './context/loggedContext';
import { PrefsProvider } from './context/prefsContext';
import { HistoryProvider } from './context/historyContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const [logged, setLogged] = useState(false);
  const [prefs, setPrefs] = useState({});
  const [currentUrl, setCurrentUrl] = useState({});

  return (
    <div className="App">
      <LoggedProvider value={{ logged, setLogged }}>
        <HistoryProvider value={{ currentUrl, setCurrentUrl }}>
          <Router>
            <Switch>
              {/* SEARCH */}
              <PrefsProvider value={{ prefs, setPrefs }}>
                <Route exact path="/" component={InitPage} />
                <Route exact path="/nevera" component={FridgePage} />
                <Route exact path="/noquiero" component={SayNotPage} />
                <Route exact path="/more" component={MorePage} />
                <Route exact path="/seleccion" component={SelectionPage} />
                <Route exact path="/horario" component={MainPage} />
                <Route exact path="/favoritos" component={FavsPage} />
                <Route exact path="/recetas" component={MasterPage} />
                <Route
                  exact
                  path="/receta-detalle/:id"
                  component={DetailPage}
                />
                {/* USER */}
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/login" component={LogInPage} />
                <Route exact path="/join" component={JoinPage} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/more-profile" component={MorePageProfile} />
                <Route
                  exact
                  path="/profile-noquiero"
                  component={SayNotProfilePage}
                />
              </PrefsProvider>
            </Switch>
          </Router>
        </HistoryProvider>
      </LoggedProvider>
    </div>
  );
}

export default App;
