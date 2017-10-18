import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div id="main">
            <div className="header">
              <h1>Consulta de dados - GitHub</h1>
            </div>
            <div className="content" id="content">
              <div className="content__data">
                  <div className="content__data--block login">
                    <label htmlFor="login">Login</label>
                    <input id="login" type="text" name="login" value=""  />
                  </div>
                  <div className="content__data--block email">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value=""  />
                  </div>
                  <div className="content__data--button">
                    <label></label>
                    <button type="submit" className="content__data--button-search">Buscar</button>
                  </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
