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
                <div>
                    <div class="footer_social">
                      <ul>
                          <li class="facebook"><a href="https://www.facebook.com/profile.php?id=100008973459426" target="_blank"></a></li>
                          <li class="linkedin"><a href="https://www.linkedin.com/in/diego-marcelo-02aa147a/" target="_blank"></a></li>
                          <li class="github"><a href="https://github.com/diegomcsilva" target="_blank"></a></li>
                      </ul>
                    </div>
                </div>
                <div></div>
                <div className="content" id="content">
                    <ContentConsult />
                    <div className="content__result">
                        {
                            this.state.lista.map(function(result){
                                return (
                                    <ul>
                                        <li>{result.nome}</li>
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
