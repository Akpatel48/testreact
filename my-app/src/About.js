import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - React App</title>
        <meta name="description" content="Learn more about our awesome React app." />
        <meta name="keywords" content="about, react, team" />
      </Helmet>
      <h1>About Us</h1>
      <p>This is the about page of our React app.</p>
    </div>
  );
}

export default About;
