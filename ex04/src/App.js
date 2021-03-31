import React, { Component } from 'react';
class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  }
  getLocalStorage = () => {
    var myLocalStorageData = localStorage.getItem('Arena');
    return myLocalStorageData;
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setLocalStorage()}>Click me</button>
        <button onClick={() => this.getLocalStorage()}>Click me 2</button>
      </div>
    )
  }
}
export default App;
