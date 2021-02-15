import React from 'react'
import SubmitButton from './SubmitButton'
import UserStore from './UserStore'
import {Observer} from 'mobx-react'


function LogOn() {

async function LogOn () {
    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'accept': "application/json",
          'content-Type': 'application/json'
          
        }
      });
      let result = await res.json()
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;

      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;

      }
    }

  
  catch(e) {
    UserStore.loading = false;
    UserStore.isLoggedin = false;
  }
}


    async function LogOut() {
      try {
        let res = await fetch('/logout', {
          method: 'post',
          headers: {
            'accept': "application/json",
            'content-Type': 'application/json'
            
          }
        });
        let result = await res.json()
        if (result && result.success) {
          
          UserStore.isLoggedIn = false;
          UserStore.username= ''
          

        }
        
      }


      catch(e) {
        console.log(e)
      }
    }
    
      if (UserStore.isloggedIn) {
        
        
        return(
        
        <div className="creditShark">
        <div className="frame">
        <div className="logonContainer">
            Welcome {UserStore.username}
            <SubmitButton
            text={'log out'}
            disabled={false}
            onClick={() => LogOn()}
            />
        </div>
        </div>
        </div>
        
        );
      ;
    }
        return (
            <div className="creditShark" >
            <div className="frame">
            <div className="logonContainer">
           
            <SubmitButton
            text={'log out'}
            disabled={false}
            onClick={() => LogOut()}
            />
            </div>
            </div>
            </div>
        )




} 

export default Observer(LogOn)