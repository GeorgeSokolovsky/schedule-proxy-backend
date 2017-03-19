const _ = require('lodash');

class ModelController {
    constructor() {
        this.services = {};
    }

    findAll(modelName) {
        return this.importService(modelName).findAll();
    }

    findOne(modelName, id) {
        return this.importService(modelName).findOne(Number(id));
    }

    save(modelName, data) {
      return this.importService(modelName).save(data);
    }

    remove(modelName, id) {
        return this.importService(modelName).remove(Number(id));
    }

    update(modelName, id, data) {
          return this.importService(modelName).update(_.assign({id: Number(id)}, data));
    }

    importService(modelName) {
        const service = _.get(this.services, modelName);

        if (!_.isUndefined(service)) {
            return service;
        }

        try {
          this.services[modelName] = require(`../../services/${modelName}.service`)[`${modelName}Service`];
        } catch (e) {
          console.log(e);
        }

        return this.services[modelName];
    }
}

module.exports.modelControllerInstance = new ModelController();
