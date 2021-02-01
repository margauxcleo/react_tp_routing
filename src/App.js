import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// permet de définir un alias 
import Home from './components/Home';
import Profile from './components/Profile';

// on doit importer le css de React toastify 
import 'react-toastify/dist/ReactToastify.css';

// toute notre appli sera enfant de Router
// Switch permet de gérer un bloc de routes 
// la propriété exact permet de préciser que c'est la route exacte qui va correspondre à Home 
function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* ici on indique :username => permet d'indiquer que userName est un paramètre dynamique, qui peut donc changer */}
          {/* <Route path="/profile/:username" > 
            <Profile />
          </Route>
          <Route path="/profile"> 
            <Profile />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route> */}
          {/* en général, on passe par component  */}
          {/* autre façon d'écrire les routes, avec la propriété component */}
          {/* Si on met component, à chaque render, on aura un nouveau component */}
          <Route path="/profile/:username" component={Profile}/>
          <Route path="/profile" component={Profile}/>
          <Route path='/' exact component={Home}/>
          {/* Autre façon d'écrire les routes, avec une fonction render */}
          {/* utile si on a besoin de fournir de la donnée */}
          {/* <Route path="/profile/:username" render={(data) => <Profile data={data} />} />
          <Route path="/profile" render={() => <Profile />}/>
          <Route path='/' exact render={() => <Home />}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
