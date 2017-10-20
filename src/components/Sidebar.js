import React, { Component } from 'react';

import '../style/css/sidebar.css';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div>
                    <div className="sidebar-right">
                          <a className="homepage" href="https://diegomcsilva.github.io/DieGO/" target="_blank"></a>
                          <a className="github" href="https://github.com/diegomcsilva" target="_blank"></a>
                          <a className="linkedin" href="https://www.linkedin.com/in/diego-marcelo-02aa147a/" target="_blank"></a>
                          <a className="facebook" href="https://www.facebook.com/profile.php?id=100008973459426" target="_blank"></a>
                    </div>
                </div>
                <div className="sidebar-left"></div>
            </div>
        )
    }
}

export default Sidebar;
