const _ = require('lodash');
const teams = require('../mock/teams/teams-data.mock').teams;

class TeamService {
  findAll() {
    this.checkCache();

    return Promise.resolve(this.teams);
  }

  findOne(id) {
    this.checkCache();

    return Promise.resolve(_.find(this.teams, {id}));
  }

  save(subj) {
    this.checkCache();

    subj.id = this.teams.length + 1;
    return Promise.resolve(this.teams.push(subj));
  }

  remove(idToRemove) {
    this.checkCache();

    return Promise.resolve(_.remove(this.teams, ({id}) => id === idToRemove));
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.teams, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });

    return Promise.resolve(subjToUpdate);
  }

  checkCache() {
    if (_.isUndefined(this.teams)) {
      this.teams = teams;
    }
  }
}

module.exports.teamService = new TeamService();
