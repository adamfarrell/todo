import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import user from '../test-content';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
     
    this.user = props.user;
  }

  render() {
    return (
      <>
        <h1>{this.user.name}'s Lists</h1>
        {
          this.user.lists.map((list, key) => (
            <Link key={key} to={`/${this.user.name}/list/${list.name}`}>
              <h3>{list.name}</h3>
            </Link>
          ))
        }
      </>
    )
  }
}
