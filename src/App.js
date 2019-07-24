import React, { Component } from 'react'
import logo from './logo.svg';
import CommentFrom from './CommentForm';
import CommentList from './CommentList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
			comments: [],
		};
  }

  addComment = (name, comment) => {
    const newComment = {
      name: name,
      comment: comment,
    }

    this.setState({
      comments: [...this.state.comments, newComment]
    })

    console.log(this.setState.comments)
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
            < CommentFrom addComment={this.addComment}/>
          </div>
          <div className="col-8">
            < CommentList comments={this.state.comments}/>
          </div>
        </div>
      </div>
    );
  }
}


