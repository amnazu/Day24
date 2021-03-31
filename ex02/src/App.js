import React, { Component } from 'react';
class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
  getMyStorage = () => {
    const myCookieData = document.cookie.replace(/(?:(?:^|.*;\s*)Year\s*=\s*([^;]*).*$)|^.*$/, "$1");
    const myLocalStorageData = localStorage.getItem("Paragon");
    const mySessionStorageData = sessionStorage.getItem("frontend")
    const arr = [];
    arr.push(myCookieData, myLocalStorageData, mySessionStorageData);
    console.log(arr);
    return arr;
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setMyStorage()}>Click me</button>
        <button onClick={() => this.getMyStorage()}>Click me 2</button>
      </div>
    )
  }
}
export default App;
