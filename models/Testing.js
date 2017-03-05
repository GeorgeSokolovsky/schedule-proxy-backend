const Model = require('./Model').Model;

class Testing extends Model {
   subject;
   date;
   teams;

  public constructor(params) {
    super(params);
  }
}

module.exports.Testing = Testing;