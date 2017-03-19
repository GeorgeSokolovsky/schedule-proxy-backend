const request = require('request');

const {env: {schedule}} = process;

class FacultyService {
  findAll() {
    return new Promise((res, rej) => {
      request.get(`${schedule}faculty`, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  findOne(id) {
    return new Promise((res, rej) => {
      request.get(`${schedule}faculty/${id}`, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  save(subj) {
    return new Promise((res, rej) => {
      request.post({url:`${schedule}faculty`, json: {subj}}, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  remove(idToRemove) {
    return new Promise((res, rej) => {
      request.delete(`${schedule}faculty/${idToRemove}`, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }

  update(subj) {
    return new Promise((res, rej) => {
      request.put({url:`${schedule}faculty`, json: {subj}}, (error, {body}) => {
        if (error) {
          rej(error);
        }

        res(body);
      });
    });
  }
}

module.exports.facultyService = new FacultyService();
