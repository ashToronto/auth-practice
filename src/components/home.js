import React, {Component} from 'react';
import Register from './register.js';

class Home extends Component {
  render() {
    return (<div>
      (this.props.currentUser ? <h1>CRYPTON HOME SCREEN</h1> : <Register/>)
    </div>);
  }
}
export default Home;
