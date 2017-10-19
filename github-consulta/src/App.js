import React, { Component } from 'react';
import Header from './components/Header';
import ContentConsult from './components/ContentConsult';
import ConectGitHub from './services/ConectGitHub';

class App extends Component {
    constructor() {
        super();
        this.state = {lista: [], login: '', email: ''};
    }

    render() {
        return (
            <div id="main">
                <Header />
                <div className="content" id="content">
                    <ContentConsult />
                    <div className="content__result">
                        {
                            this.state.lista.map(function(result){
                                return (
                                    <ul>
                                        <li>{result.nome}</li>
                                        <li>{result.login}</li>
                                    </ul>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
