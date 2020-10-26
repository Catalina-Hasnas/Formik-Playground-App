import React from 'react';
import Tabs from "./Tabs"; 
import AccountSettings from './Forms/AccountSettings'
import UserInformation from './Forms/userInformation'
import styles from './Forms/Forms.module.css'

class UserInputTabs extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <Tabs> 
          <div label="Account Settings"> 
            <AccountSettings/>
          </div> 
          <div label="User Information"> 
            <UserInformation/>
          </div> 
        </Tabs> 
      </div>
    );
  }
};

export default UserInputTabs;