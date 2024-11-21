// Home.js

import React from 'react';
import Profile from './Profile';
import Tasks from './Tasks';
import Stats from './Stats';
import '../App.css'; // External CSS for layout styling

const Home = () => {
  return (
    <div className="home">
      
      <div className='pro-stats'>
        <Profile />
        <Stats />
        </div>
      <div className='right-side'>
      <Tasks />
      </div>
      
       
     
       
     
    </div>
  );
};

export default Home;
