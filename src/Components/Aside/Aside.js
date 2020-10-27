import React from 'react';
import styles from './Aside.module.css'



class Aside extends React.Component {
    render() {
      return (
          <div className={styles.container}>
            <h1>First line</h1>
          </div>
      )
    }
}

export default Aside;