import React, { Component } from 'react';
import ConectGitHub from '../services/ConectGitHub';

import '../style/css/content.css';

class ContentConsult extends Component {

    constructor() {
        super();
        this.state = {lista: [], repos: [], login: ' ', maior: 0, nomeRepo: ' ', nomesRepo: ' ', followers: ' ', following: ' ', email: ' ', bio: ' '};
        this.consultInfos = this.consultInfos.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    // Consulta as informações no github
    consultInfos(evento) {

        evento.preventDefault();

        // Variáveis mais utilizadas neste bloco
        var erroLogin = document.getElementById('error-login'),
            erroLoginNottFound = document.getElementById('error-login-not-found'),
            statusResult = document.getElementById('deactivated'),
            setNomeRepo = this.setState({nomeRepo:' '}),
            setMaiorStar = this.setState({maior:0});

        // Verificar se o campo está vázio
        if (document.getElementById('login').value === "") {
            erroLoginNottFound.style.display = "none";
            erroLogin.style.display = "block";
            statusResult.classList.remove("active");
            setNomeRepo;
            setMaiorStar;
        } else {
            erroLogin.style.display = "none";
            erroLoginNottFound.style.display = "none";
            setNomeRepo;
            setMaiorStar;
            statusResult.classList.remove("active");

            // Pega o login e faz a consulta no github
            ConectGitHub.getByUserLogin(this.state.login).then(function(response) {
                console.log(response);
                this.setState({lista:response.data});
                this.setState({followers:response.data.followers});
                this.setState({following:response.data.following});
                this.setState({email:response.data.email});
                this.setState({bio:response.data.bio});
            }.bind(this)).catch(function (erro) {
                erroLoginNottFound.style.display = "block";
            });

            // Pega o login e faz a consulta do repositório no github
            ConectGitHub.getReposByLogin(this.state.login).then(function(response) {
                console.log(response);
                statusResult.classList.add("active"),
                document.getElementById('img-result').style.display = "block";
                this.setState({repos:response.data});
                for (var i = 0; i < this.state.repos.length; i++) {
                    // console.log(this.state.repos[i].stargazers_count);
                    if ( this.state.repos[i].stargazers_count > this.state.maior ) {
                        this.state.maior = this.state.repos[i].stargazers_count;
                        this.state.nomeRepo = this.state.repos[i].name;
                        this.setState({nomeRepos:this.state.nomeRepo});
                    }
                    this.setState({nomesRepos:this.state.nomeRepo});
                    console.log(this.state.nomesRepos);
                    // document.getElementById("list-repos").appendChild({this.state.nomesRepos});
                    // this.state.repos[i]
                }
            }.bind(this));

            // console.log(this.state.maior);
            // console.log(this.state.nomeRepo);
        }
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
                <div className="content__data--button">
                    <label></label>
                    <button type="button" className="content__data--button-search" onClick={this.consultInfos}>Buscar</button>
                </div>
                <div id="deactivated">
                    <p className="content__data-text">Repositório mais popular</p>
                    <h3>{this.state.nomeRepo}</h3>
                    <div className="content__data-img">
                    <img id="img-result" src={this.state.lista.avatar_url} />
                    <h3>{this.state.followers} </h3>
                    <h3>{this.state.following} </h3>
                    <h3>{this.state.bio} </h3>
                    <h3>{this.state.email} </h3>
                    <div className="list-repos">
                        <ul id="list-repos">

                        </ul>
                    </div>
                </div>
                </div>
                <div id="error-login">Informe o login</div>
                <div id="error-login-not-found">Login não encotrado</div>
            </div>
        )
    }
}

export default ContentConsult
