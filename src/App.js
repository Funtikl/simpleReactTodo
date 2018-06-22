import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo:"asdsa"
    }
this.handleInputChange = this.handleInputChange.bind(this);
this.handleTodoAdd = this.handleTodoAdd.bind(this);
  }
 handleInputChange (e){
    e.preventDefault();
    this.setState({
      todo:e.target.value
    })
  }

handleTodoAdd(){

    alert(this.state.todo);

}
  render() {

   
    return (
      <div className="App">
      <input type="text" value={this.state.value} onChange={this.handleInputChange} />
      <button onClick={this.handleTodoAdd}>Plus</button>
        <ul>
      {console.log(this.state.todo)}
        </ul>
      </div>
    );
  }
}

export default App;
