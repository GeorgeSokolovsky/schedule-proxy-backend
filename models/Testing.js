const Model = require('./Model').Model;

class Testing extends Model {
   public subject;
   public date;
   public teams;

  public constructor(params) {
    super(params);
  }
}

module.exports.Testing = Testing;