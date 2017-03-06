const _ = require('lodash');
const teams = require('../mock/teams/teams-data.mock').teams;

class TeamService {
  findAll() {
    this.checkCache();

    return this.teams;
  }

  findOne(id) {
    this.checkCache();

    return _.find(this.teams, {id});
  }

  save(subj) {
    this.checkCache();

    this.teams.push(subj);
  }

  remove(idToRemove) {
    this.checkCache();

    return _.remove(this.teams, ({id}) => id === idToRemove);
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.teams, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });
  }

  checkCache() {
    if (_.isUndefined(this.teams)) {
      this.teams = teams;
    }
  }
}

module.exports.teamService = new TeamService();
