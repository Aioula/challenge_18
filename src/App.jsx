import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Create your Redux store here
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/video/:id" component={VideoPlayer} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

