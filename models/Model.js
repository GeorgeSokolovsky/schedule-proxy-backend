const _ = require('lodash');

class Model {
    public id;

    constructor(params) {
        if (!_.isNil(params)) {
            _.forEach(params, (key, value) => {
                this[key] = value;
            });
        }
    }
}

module.exports.Model = Model;
