import React, { Component } from 'react';

import '../style/css/sidebar.css';

class Sidebar extends Component {

    toggleSidebar() {

        if (document.getElementsByClassName('sidebar-right')["0"].className === "sidebar-right active") {
            document.getElementById('sidebar-right').classList.remove("active");
        } else {
            document.getElementById('sidebar-right').classList.add("active");
        }
    }

    render() {
        return (
            <div className="sidebar">
                <div>
                    <div className="sidebar-right" id="sidebar-right" onClick={this.toggleSidebar}>
                          <a className="Homepage" href="https://diegomcsilva.github.io/DieGO/" target="_blank"></a>
                          <a className="Github" href="https://github.com/diegomcsilva" target="_blank"></a>
                          <a className="Linkedin" href="https://www.linkedin.com/in/diego-marcelo-02aa147a/" target="_blank"></a>
                          <a className="Facebook" href="https://www.facebook.com/profile.php?id=100008973459426" target="_blank"></a>
                    </div>
                </div>
                <div className="sidebar-left"></div>
            </div>
        )
    }
}

export default Sidebar;
