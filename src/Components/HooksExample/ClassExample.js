import React, { Component } from "react";

class ClassExample extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      posts: [],
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleClick = () => {
    this.setState({ posts: [...this.state.posts, this.state.userInput] });
  };

  render() {
    return (
      <div>
        //#input box
        <input onChange={this.handleChange} value={this.state.userInput} />
        //#add to posts button
        <button onClick={this.handleClick}>Add to Post</button>
        //#list of posts
        {this.state.posts.map((element, index) => {
          return <div key={index}>{element}</div>;
        })}
        //#name passed down with this.props.
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default ClassExample;
