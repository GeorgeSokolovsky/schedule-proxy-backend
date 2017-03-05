const Model = require('./Model').Model;

class Subject extends Model {
  public name;
  public shortName;

  public constructor(params) {
    super(params);
  }
}

module.exports.Subject = Subject;
