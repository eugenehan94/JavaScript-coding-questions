/*
Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a
strictly "first in, first out" basis. People must adopt either the "oldest" (based
on arrival time) of all animals at the shelter, or they can select whether they
would prefer a dog or a cat (and will receive the oldest animal of that type). They
cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in LinkedList data structure.
*/

class myAnimal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class myAttempt {
  // select dog or cat, then get the oldest of that type
  // Assume no other type is inputted
  // Need to have a timestamp added to each dog and cat - keep track of order
  // (increment order by 1 when adding animal)
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 0;
  }

  enqueue(animal) {
    // Store dog in dog queue and cat in cat queue with order as timestamp
    // Increment order by 1
    if (animal.type !== "dog" && animal.type !== "cat") {
      return console.log("please queue only 'dog' or 'cat'");
    }
    animal.order = this.order;
    if (animal.type === "dog") {
      this.dogQueue.push(animal);
    }
    if (animal.type === "cat") {
      this.catQueue.push(animal);
    }
    this.order++;
  }

  dequeueAny() {
    if (this.catQueue.length === 0 && this.dogQueue.length === 0) {
      return console.log("Animal shelter is empty");
    }

    if (this.catQueue.length === 0) {
      return this.dogQueue.shift();
    }

    if (this.dogQueue.length === 0) {
      return this.catQueue.shift();
    }

    if (this.dogQueue[0].order > this.catQueue[0].order) {
      return this.catQueue.shift();
    } else {
      return this.dogQueue[0].shift();
    }
  }

  dequeueDog() {
    if (this.dogQueue.length === 0) {
      return console.log("Dog queue is empty");
    }
    let firstElement = this.dogQueue.shift();
    return firstElement;
  }
  dequeueCat() {
    if (this.catQueue.length === 0) {
      return console.log("Cat queue is empty");
    }
    let firstCatElement = this.catQueue.shift();
    return firstCatElement;
  }
}

let test = new myAttempt();
let testAnimal = new myAnimal("John", "dog");
test.enqueue(testAnimal);
let testAnimal2 = new myAnimal("Jason", "dog");
test.enqueue(testAnimal2);
let testAnimal3 = new myAnimal("Kat", "cat");
test.enqueue(testAnimal3);
console.log(test);
// test.dequeueDog();
// test.dequeueAny();
// test.dequeueCat();
console.log("End: ", test);
