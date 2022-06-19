class Person {
  constructor(firstName, lastName, age) { // function parameters are positional and overrule parameter name.
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce () { // check test space and you'll see no paramters are needed here.
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(peopleArr) {
    if (!Array.isArray(peopleArr)) { // Array.isArray is a built-in static method which is why it's capitalized.
      console.log("introducePeople only takes an array as an argument.");
      return;
    }
    for (let person of peopleArr) {
      if (!(person instanceof Person)) {
        console.log("All items in array must be Person class instances.");
        return;
      }
    }
    peopleArr.forEach(person => person.introduce())
  }
}

/*
You can always check the test specs to see what
Each it black in th test specs refers to one of the green checks when you run mocha command.

*/

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
