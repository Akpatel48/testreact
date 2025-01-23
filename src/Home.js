import React, { useEffect } from 'react';
// import usePageTitle from './usePageTitle'; // import the custom hook

function Home() {
  // usePageTitle(); // Call it here to set title
  useEffect(() => {
    document.title = 'About Us - React App';
  }, []);

  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
    </div>
  );
}

export default Home;
