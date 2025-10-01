import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import OfferDetails from './components/OfferDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/offer/:id' component={OfferDetails} />
      </Switch>
    </Router>
  );
}

export default App;