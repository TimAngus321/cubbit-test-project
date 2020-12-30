import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import  Header from './Screens/Components/header';
import Confrimation from './Screens/Components/Pages/Confirmation/confirmation';
import Confirmation from './Screens/Components/Pages/Confirmation/confirmation';

const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route
        exact
        path='/'
        render={props => (
          <Fragment>
            <Header/>
          </Fragment>
        )} >

        </Route>
        <Route exact path='/confirmation' component={Confirmation} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
