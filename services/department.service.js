const _ = require('lodash');
const departments = require('../mock/departments/departments-data.mock').departments;

class DepartmentService {
  findAll() {
    this.checkCache();

    return this.departments;
  }

  findOne(id) {
    this.checkCache();

    return _.find(this.departments, {id});
  }

  save(subj) {
    this.checkCache();

    this.departments.push(subj);
  }

  remove(idToRemove) {
    this.checkCache();

    return _.remove(this.departments, ({id}) => id === idToRemove);
  }

  update(subj) {
    this.checkCache();

    const subjToUpdate = _.find(this.departments, {id: subj.id});

    _.forIn(subj, (value, key) => {
      subjToUpdate[key] = value;
    });
  }

   checkCache() {
    if (_.isUndefined(this.departments)) {
      this.departments = departments;
    }
  }
}

module.exports.departmentService = new DepartmentService();
