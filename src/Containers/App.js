import React from 'react';
import UserInputTabs from '../Components/UserInputTabs/UserInputTabs';
import User from '../Components/User/User';
import Aside from '../Components/Aside/Aside';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1>He-hei!</h1>
      <div className={styles.container}>
        
        <User/>
        <UserInputTabs/>
        <Aside/>
        
      </div>
    </div>
  );
}

export default App;
