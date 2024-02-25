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
    if (animal.type === "dog") {
      animal.order = this.order;
      this.dogQueue.push(animal);
    }

    this.order++;
  }
}

let test = new myAttempt();
let testAnimal = new myAnimal("John", "dog");
test.enqueue(testAnimal);
let testAnimal2 = new myAnimal("Jason", "dog");
test.enqueue(testAnimal2);
console.log(test);
