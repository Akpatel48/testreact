import React from 'react';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div>
      <Helmet>
        <title>About Us - React App</title>
      </Helmet>
      <h1>Welcome to the Homepage!</h1>
    </div>
  );
}

export default Home;
