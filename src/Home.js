import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Welcome to the homepage of my React app!" />
        <title>Home - React App</title>
      </Helmet>
      <h1>Welcome to the Homepage!</h1>
    </div>
  );
}

export default Home;
