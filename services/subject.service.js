const _ = require('lodash');
const subjects = require('../mock/subjects/subjects-data.mock').subjects;

class SubjectService {
  findAll() {
    this.checkCache();

    return this.subjects;
  }

  findOne(id) {
    this.checkCache();

    return _.find(this.subjects, {id});
  }

  save(subj) {
    this.checkCache();

    this.subjects.push(subj);
  }

  remove(idToRemove) {
    this.checkCache();

    return _.remove(this.subjects, ({id}) => id === idToRemove);
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.subjects, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });
  }

   checkCache() {
    if (_.isUndefined(this.subjects)) {
      this.subjects = subjects;
    }
  }
}

module.exports.subjectService = new SubjectService();
