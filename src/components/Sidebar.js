import React, { Component } from 'react';

import '../style/css/sidebar.css';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div>
                    <div className="sidebar-right">
                      <ul>
                          <li className="facebook"><a href="https://www.facebook.com/profile.php?id=100008973459426" target="_blank"></a></li>
                          <li className="linkedin"><a href="https://www.linkedin.com/in/diego-marcelo-02aa147a/" target="_blank"></a></li>
                          <li className="github"><a href="https://github.com/diegomcsilva" target="_blank"></a></li>
                      </ul>
                    </div>
                </div>
                <div className="sidebar-left"></div>
            </div>
        )
    }
}

export default Sidebar;
