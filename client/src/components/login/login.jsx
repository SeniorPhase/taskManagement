import React from 'react'

import './login.css'


function login() {
  return (
    <>
     <div class="wrapper">
     <form action="">  
          <div class="inputBox">
                  <input id="usernameInput" type="text" placeholder="Username" />
                  <i class='bx bxs-user'></i>
              </div>
          <div className="inputBoxx">
                  <input id="passwordInput" type="password" placeholder="Password"/> 
                  <i class='bx bxs-lock-alt'></i>
              </div> 

              <button class="btn"> LOGIN </button>
 
       </form>  
 </div>
    
    
    
    
    </>
  )
}

export default login