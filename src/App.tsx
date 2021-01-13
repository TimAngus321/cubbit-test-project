import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Confirmation from './Screens/Components/Pages/Confirmation/confirmation';
import Checkout from './Screens/Components/Pages/Checkout/checkout';

const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
    {/* <Checkout /> */}
      <Switch>
      {/* <Route
                path="/"
                exact
                render={() => {
                    return (
                      <Redirect to="/checkout" />
                    )
                }}
              /> */}
        <Route exact path='/' component={Checkout} />
        <Route exact path='/confirmation' component={Confirmation} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
