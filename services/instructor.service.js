const _ = require('lodash');
const instructors = require('../mock/instructors/instructors-data.mock').instructors;

class InstructorService {
  findAll() {
    this.checkCache();

    return this.instructors;
  }

  findOne(id) {
    this.checkCache();

    return _.find(this.instructors, {id});
  }

  save(subj) {
    this.checkCache();

    this.instructors.push(subj);
  }

  remove(idToRemove) {
    this.checkCache();

    return _.remove(this.instructors, ({id}) => id === idToRemove);
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.instructors, {id: subj.id});

    _.forIn(subj, (key, value) => {
      subjToUpdate[key] = value;
    });
  }

   checkCache() {
    if (_.isUndefined(this.instructors)) {
      this.instructors = instructors;
    }
  }
}

module.exports.instructorService = new InstructorService();
