import React from 'react';
import Presentational from '../Components/UserInputTabs/Presentational';
import UserInputTabs from '../Components/UserInputTabs/UserInputTabs';
import Aside from '../Components/Aside/Aside'
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1>He-hei!</h1>
      <div className={styles.container}>
        {/* <Presentational/> */}
        <Aside/>
        <UserInputTabs/>
      </div>
    </div>
  );
}

export default App;
