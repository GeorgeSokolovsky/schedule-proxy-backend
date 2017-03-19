const _ = require('lodash');
const subjects = require('../mock/subjects/subjects-data.mock').subjects;

class SubjectService {
  findAll() {
    this.checkCache();

    return Promise.resolve(this.subjects);
  }

  findOne(id) {
    this.checkCache();

    return Promise.resolve(_.find(this.subjects, {id}));
  }

  save(subj) {
    this.checkCache();

    subj.id = this.subjects.length + 1;
    return Promise.resolve(this.subjects.push(subj));
  }

  remove(idToRemove) {
    this.checkCache();

    return Promise.resolve(_.remove(this.subjects, ({id}) => id === idToRemove));
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.subjects, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });

    return Promise.resolve(subjToUpdate);
  }

   checkCache() {
    if (_.isUndefined(this.subjects)) {
      this.subjects = subjects;
    }
  }
}

module.exports.subjectService = new SubjectService();
