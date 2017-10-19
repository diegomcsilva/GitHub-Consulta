import axios from 'axios';

var ConectGitHub = {
  getByUserLogin: function (username) {
    return axios.get('https://api.github.com/users/' + username);
  },

  getReposByLogin: function (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
  }

};

module.exports = ConectGitHub;
