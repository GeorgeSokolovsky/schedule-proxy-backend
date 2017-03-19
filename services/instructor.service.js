const _ = require('lodash');
const instructors = require('../mock/instructors/instructors-data.mock').instructors;

class InstructorService {
  findAll() {
    this.checkCache();

    return Promise.resolve(this.instructors);
  }

  findOne(id) {
    this.checkCache();

    return Promise.resolve(_.find(this.instructors, {id}));
  }

  save(subj) {
    this.checkCache();

    subj.id = this.instructors.length + 1;
    return Promise.resolve(this.instructors.push(subj));
  }

  remove(idToRemove) {
    this.checkCache();

    return Promise.resolve(_.remove(this.instructors, ({id}) => id === idToRemove));
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.instructors, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });

    return Promise.resolve(subjToUpdate);
  }

   checkCache() {
    if (_.isUndefined(this.instructors)) {
      this.instructors = instructors;
    }
  }
}

module.exports.instructorService = new InstructorService();
