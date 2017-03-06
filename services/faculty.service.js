const _ = require('lodash');
const faculties = require('../mock/faculties/faculties-data.mock').faculties;

class FacultyService {
  findAll() {
    this.checkCache();

    return this.faculties;
  }

  findOne(id) {
    this.checkCache();

    return _.find(this.faculties, {id});
  }

  save(subj) {
    this.checkCache();

    this.faculties.push(subj);
  }

  remove(idToRemove) {
    this.checkCache();

    return _.remove(this.faculties, ({id}) => id === idToRemove);
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.faculties, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });
  }

   checkCache() {
    if (_.isUndefined(this.faculties)) {
      this.faculties = faculties;
    }
  }
}

module.exports.facultyService = new FacultyService();
