import React, { Component } from 'react';
import Light from "../components/Light";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Light/>
        <div className="homecontent">
          <h1>MadBars</h1>
          <div className = "buttoncontainer">
            <button className = "button" >About</button>
            {/* <button className = "button" >Login</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;