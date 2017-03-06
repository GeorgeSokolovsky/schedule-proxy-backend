const _ = require('lodash');

class ModelController {
    constructor() {
        this.services = {};
    }

    findAll(modelName) {
        return new Promise((resolve) => {
            resolve(this.importService(modelName).findAll());
        });
    }

    findOne(modelName, id) {
        return new Promise((resolve) => {
          resolve(this.importService(modelName).findOne(Number(id)));
        });
    }

    save(modelName, data) {
        return new Promise((resolve) => {
          resolve(this.importService(modelName).save(data));
        });
    }

    remove(modelName, id) {
        return new Promise((resolve) => {
          resolve(this.importService(modelName).remove(Number(id)));
        });
    }

    update(modelName, id, data) {
        return new Promise((resolve) => {
          resolve(this.importService(modelName).update(_.assign({id: Number(id)}, data)));
        });
    }

    importService(modelName) {
        const service = _.get(this.services, modelName);

        if (!_.isUndefined(service)) {
            return service;
        }

        const serviceClazz = require(`../../services/${modelName}.service`)[`${modelName}Service`];

        this.services[modelName] = serviceClazz;

        return this.services[modelName];
    }
}

module.exports.modelControllerInstance = new ModelController();
