import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      

      <nav className="navigation max-width-1 m-auto">
        <div className="nav-left">
            <a href="/">
                <span>
                  <img src="../assets/img/logo.png" width="94px" alt="no"/>
                  </span>
            </a>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/CreatePost">CREATEBLOG</a></li>
                
            </ul>
        </div>
        <div className="nav-right">  
                <button className="btn">SIGNIN</button>
        </div>

    </nav>
        
      </div>


  );
}

export default Navbar;

