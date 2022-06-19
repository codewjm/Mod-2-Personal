// Your code here
const Employee = require('./employee');

const johnW = new Employee(
  'John Wick',
  'Dog Lover',
);

// setTimeout(johnW.sayName, 2000);
// setTimeout(johnW.sayOccupation, 3000);

// lookout for arrow functions, which auto-bind AudioContext

const boundSayName = johnW.sayName.bind(johnW);
const boundSayOccupation = johnW.sayOccupation.bind(johnW);

setTimeout(boundSayName, 2000);
setTimeout(boundSayOccupation, 3000);
