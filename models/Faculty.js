const _ = require('lodash');
import { Model } from './Model';
import { Department } from './Department';

export class Faculty extends Model {
  public name;
  public shortName;
  public departments;

  public constructor(params) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.departments)) {
      this.departments = _.map(params.departments, (departmentData) => new Department(departmentData));
    }
  }
}