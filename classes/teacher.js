const Person = require('./person');

// Your code here

class Teacher extends Person {
  constructor(name, age, subject, yearsOfExperience) {
    super(name, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((previous, current) => {
      return previous.yearsOfExperience + current.yearsOfExperience
    });
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
