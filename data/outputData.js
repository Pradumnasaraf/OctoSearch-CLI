const { default: axios } = require("axios");

class Search {
  userSearch = function (userName) {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        const date = res.data.created_at.split("T")[0];
        const printData = `${res.data.name}
Followers: ${res.data.followers}
Total repositories: ${res.data.public_repos}
Created on: ${date}
GitHub URL: ${res.data.html_url}\n`;
        console.log(printData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  repoSearch = function (userName, repoName) {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        res.data.forEach((repo) => {
          if (repo.name === repoName) {
            const outputData = `Repo name: ${repo.name}
Description: ${repo.description}
URL: ${repo.html_url}
Major laungauge: ${repo.language}
Open Issues: ${repo.open_issues_count}\n`;
            console.log(outputData);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

module.exports = Search;
