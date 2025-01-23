import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import your components
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        {/* Global Meta Tags for the app */}
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A basic React app with dynamic meta tags" />
          <title>My React App</title>
        </Helmet>

        {/* Define Routes */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
