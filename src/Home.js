import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  useEffect(() => {
    console.log('Title is updated');
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home - React App</title>
      </Helmet>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}

export default Home;
