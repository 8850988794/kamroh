import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero/Hero';

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;