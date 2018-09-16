import React, {Component} from 'react';
import Logout   from "./logout";
import Home   from "./home";
import { Link }   from "@reach/router";

class Navbar extends Component {
  render() {
    return (<div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="register">Register</Link>
        <div><Logout /></div>
      </nav>
    </div>);
  }
}

export default Navbar;
