import React, {Component} from 'react';
import { Link }   from "@reach/router";

class Navbar extends Component {
  render() {
    return (<div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="register">Register</Link>
      </nav>
    </div>);
  }
}

export default Navbar;
