function eat() {
  console.log(`${this.name} eats fish food`);
}

//Fish class
class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo'); // nemo is an instance of the Fish class

/********************************* Scenario 1 *********************************/
// eat(); // ? - prints 'undefined eats fish food'


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ? - 'Nemo eats fish food'


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ? - 'undefined eats fish food'

// eat is a function in a global scope. It's context by default will be the global object.

/********************************* Scenario 4 *********************************/
// nemo.swim(); // ? - 'Nemo swimming in the water'


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ? 'TypeError: Cannot read properties of undefined (reading 'name')'
