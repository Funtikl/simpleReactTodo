import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      list: []
    };
  }
  onChange = event => {
    this.setState({
      todo: event.target.value
    });
  };
  onSubmit= event =>{
    event.preventDefault();
    this.setState({
        
    })
  }
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.todo} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List />
      </div>
    );
  }
}

export default App;
