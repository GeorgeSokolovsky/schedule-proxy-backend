const _ = require('lodash');
import { Model } from './Model';
import { Subject } from './Subject';

export class Instructor extends Model {
  public name;
  public shortName;
  public position;
  public departmentId;
  public subjects;

  public constructor(params) {
    super(params);

    if (!_.isNil(params) && !_.isNil(params.subjects)) {
      this.subjects = _.map(params.subjects, (subjectData) => new Subject(subjectData));
    }
  }
}