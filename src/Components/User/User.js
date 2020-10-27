import React from 'react';
import styles from './User.module.css'
import Contact from './Contact/Contact'



class User extends React.Component {
    render() {
      return (
          <div className={styles.container}>
            <h3>Hello, newUser</h3>
            <Contact/>
          </div>
      )
    }
}

export default User;