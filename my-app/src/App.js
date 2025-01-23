import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Change Switch to Routes
import { Helmet } from 'react-helmet';

// Import your components
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        {/* Global Meta Tags for the app */}
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A basic React app with dynamic meta tags" />
          <title>My React App</title>
        </Helmet>

        {/* Define Routes */}
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Use 'element' prop */}
          <Route path="/about" element={<About />} /> {/* Use 'element' prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
