import React, { Component } from 'react';
import ConectGitHub from '../services/ConectGitHub';

class ContentConsult extends Component {
    constructor() {
        super();
        this.state = {lista: [], login: '', email: ''};
        this.consultInfos = this.consultInfos.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    consultInfos(evento) {
        evento.preventDefault();
        ConectGitHub.getByUserLogin(this.state.login).then(function(response) {
            console.log(response);
        })
    }

    setLogin(evento) {
        this.setState({login:evento.target.value});
    }

    setEmail(evento) {
        this.setState({email:evento.target.value});
    }

    render() {
        return (
            <div className="content__data">
            <div className="content__data--block login">
            <label htmlFor="login">Login</label>
            <input id="login" type="text" name="login" value={this.state.login} onChange={this.setLogin}/>
            </div>
            <div className="content__data--block email">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail}/>
            </div>
            <div className="content__data--button">
            <label></label>
            <button type="button" className="content__data--button-search" onClick={this.consultInfos}>Buscar</button>
            </div>
            </div>
        )
    }
}

export default ContentConsult
