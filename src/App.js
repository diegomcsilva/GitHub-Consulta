import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentConsult from './components/ContentConsult';

import './style/css/general.css';

class App extends Component {
    constructor() {
        super();
        this.state = {lista: [], login: '', email: ''};
    }

    render() {
        return (
            <div id="main">
                <Header />
                <Sidebar />
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
