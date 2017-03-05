const _ = require('lodash');
const Instructor = require('./Instructor').Instructor;

class Team extends Entity {
  public instructors = [];
  public responsibility;

  public constructor(params) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.instructors)) {
      this.instructors = _.map(params.instructors, (instructorData) => new Instructor(instructorData));
    }
  }
}

module.exports.Team = Team;
