const subjects = require('../../mock/subjects/subjects-data.mock').subjects;
const teams = require('../../mock/teams/teams-data.mock').teams;

module.exports.testings = [
  {
    id: 1,
    subject: subjects[0],
    date: new Date(2017, 5, 14),
    teams: [teams[0], teams[1]]
  },
  {
    id: 2,
    subject: subjects[1],
    date: new Date(2017, 5, 15),
    teams: [teams[2], teams[3]]
  },
  {
    id: 3,
    subject: subjects[2],
    date: new Date(2017, 5, 16),
    teams: [teams[0], teams[3]]
  },
  {
    id: 4,
    subject: subjects[3],
    date: new Date(2017, 5, 17),
    teams: [teams[3], teams[2]]
  },
  {
    id: 5,
    subject: subjects[4],
    date: new Date(2017, 5, 18),
    teams: [teams[2], teams[1]]
  }
];
