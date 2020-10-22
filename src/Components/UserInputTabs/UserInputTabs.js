import React from 'react';
import Tabs from "./Tabs"; 
import AccountSettings from './Forms/AccountSettings'
import UserInformation from './Forms/userInformation'

class UserInputTabs extends React.Component {
  render() {
    return (
      <div>
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