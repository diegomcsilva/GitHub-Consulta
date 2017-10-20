import React, { Component } from 'react';
import ConectGitHub from '../services/ConectGitHub';

import '../style/css/content.css';

class ContentConsult extends Component {
    constructor() {
        super();
        this.state = {lista: [], repos: [], login: '', maior: 0, nomeRepo: ''};
        this.consultInfos = this.consultInfos.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    consultInfos(evento) {
        evento.preventDefault();

        this.setState({nomeRepo:' '});
        this.setState({maior:0});

        document.getElementById('img-result').style.display = "none";
        document.getElementById('deactivated').classList.remove("active");
        // this.state.maior = 0;
        ConectGitHub.getByUserLogin(this.state.login).then(function(response) {
            // console.log(response.data);
            this.setState({lista:response.data});
        }.bind(this)).catch(function (erro) {
            alert('Login não encontrado');
        });

        ConectGitHub.getReposByLogin(this.state.login).then(function(response) {
            // console.log(response.data);
            document.getElementById('deactivated').classList.add("active");
            document.getElementById('img-result').style.display = "block";;
            this.setState({repos:response.data});
            for (var i = 0; i < this.state.repos.length; i++) {
                // console.log(this.state.repos[i].stargazers_count);
                if ( this.state.repos[i].stargazers_count > this.state.maior ) {
                    this.state.maior = this.state.repos[i].stargazers_count;
                    this.state.nomeRepo = this.state.repos[i].name;
                    this.setState({nomeRepos:this.state.nomeRepo});
                }
            }
        }.bind(this));

        console.log(this.state.maior);
        console.log(this.state.nomeRepo);

    }

    setLogin(evento) {
        this.setState({login:evento.target.value});
    }

    setEmail(evento) {
        this.setState({email:evento.target.value});
    }

    checkMore() {

    }

    render() {

        return (
            <div className="content__data">
                <div className="content__data--block login">
                    <label htmlFor="login">Login</label>
                    <input id="login" type="text" name="login" value={this.state.login} onChange={this.setLogin}/>
                </div>
                <div className="content__data--button">
                    <label></label>
                    <button type="button" className="content__data--button-search" onClick={this.consultInfos}>Buscar</button>
                </div>
                <p id="deactivated">Repositório mais popular</p>
                <h3>{this.state.nomeRepo}</h3>
                <div>
                    <img id="img-result" src={this.state.lista.avatar_url} />
                </div>
            </div>
        )
    }
}

export default ContentConsult
