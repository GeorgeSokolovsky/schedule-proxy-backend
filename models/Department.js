const _ = require('lodash');
const Model = require('./Model').Model;
const Instructor = require('./Instructor').Instructor;

class Department extends Model {
  public name;
  public facultyId;
  public instructors;

  constructor(params) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.instructors)) {
      this.instructors = _.map(params.instructors, (instructorData) => new Instructor(instructorData));
    }
  }
}

module.exports.Department = Department;