import React, {Component} from 'react';
import {withAlert} from 'react-alert';

class Logout extends Component {

  getLogout = (e) => {
    e.preventDefault();
    fetch('/api/users/logout', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json"
      }
    }).then(result => result.json()).then(data => {
      console.log(data);
      if (data.redirect) {
        window.location.replace(data.url);
      }
    })
  }
  render() {
    return (<div>
      <button onClick={this.getLogout}>Logout</button>
    </div>);
  }
}
export default Logout;
