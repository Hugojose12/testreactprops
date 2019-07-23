import React, { Component } from 'react'
import logo from './logo.svg';
import CommentFrom from './CommentForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
			comments: {},
		};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            React Comments
          </h3>
        </header>
        <div className="row">
          <div className="col-4">
            < CommentFrom />
          </div>
          <div className="col-8">
          
          </div>
        </div>
      </div>
    );
  }
}


