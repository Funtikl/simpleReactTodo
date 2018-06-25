import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      items: []
    };
  }
  // it takes state, creates new copy of it, takes target value of input and changes state
  onChange = event => {
    this.setState({
      todo: event.target.value
    });
  };
  onSubmit= event =>{
    event.preventDefault();
    this.setState({
      todo:"",
      items: [...this.state.items, this.state.todo]
        
    })
  }
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.todo} onChange={this.onChange} />
          <button> Submit </button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
