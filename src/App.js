import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Overview from './components/Overview/Overview';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <div className="wrapper">
          <ProfileInfo />
          <Overview />
          </div>
        </div>
    );
  }
}

export default App;
