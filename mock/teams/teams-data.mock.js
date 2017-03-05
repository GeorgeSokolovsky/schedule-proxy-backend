const instructors = require('../instructors/instructors-data.mock').instructors;

module.exports.teams = [
  {
    id: 1,
    instructors: [
      instructors[0],
      instructors[1],
      instructors[2]
    ],
    responsibility: 0
  },
  {
    id: 2,
    instructors: [
      instructors[3],
      instructors[2]
    ],
    responsibility: 1
  },
  {
    id: 3,
    instructors: [
      instructors[0],
      instructors[1],
      instructors[2],
      instructors[3]
    ],
    responsibility: 2
  },
  {
    id: 4,
    instructors: [
      instructors[2],
      instructors[4]
    ],
    responsibility: 3
  }
];
