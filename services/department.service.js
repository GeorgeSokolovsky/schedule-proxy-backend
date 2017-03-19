const request = require('request');

class DepartmentService {
  findAll() {
    return new Promise((res, rej) => {
      request.get(`${schedule}department`, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  findOne(id) {
    return new Promise((res, rej) => {
      request.get(`${schedule}department/${id}`, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  save(subj) {
    return new Promise((res, rej) => {
      request.post({url: `${schedule}department`, json: {subj}}, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  remove(idToRemove) {
    return new Promise((res, rej) => {
      request.delete(`${schedule}department/${idToRemove}`, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  update(subj) {
    return new Promise((res, rej) => {
      request.put({url: `${schedule}department`, json: {subj}}, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }
}

module.exports.departmentService = new DepartmentService();
