const _ = require('lodash');
const testings = require('../mock/testings/testings-data.mock').testings;

class TestingService {
  findAll() {
    this.checkCache();

    return Promise.resolve(this.testings);
  }

  findOne(id) {
    this.checkCache();

    return Promise.resolve(_.find(this.testings, {id}));
  }

  save(subj) {
    this.checkCache();

    subj.id = this.testings.length + 1;
    return Promise.resolve(this.testings.push(subj));
  }

  remove(idToRemove) {
    this.checkCache();

    return Promise.resolve(_.remove(this.testings, ({id}) => id === idToRemove));
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.testings, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });

    return Promise.resolve(subjToUpdate);
  }

  checkCache() {
    if (_.isUndefined(this.testings)) {
      this.testings = testings;
    }
  }
}

module.exports.testingService = new TestingService();
