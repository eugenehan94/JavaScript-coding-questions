/*
Time complexity:
Enqueuing an element: O(1)
Dequeuing an element: O(n) (as all the remaining elements 
    need to be shifted one position to the left)
Accessing the front of the queue: O(1)
Space complexity: 
O(n), where n is the number of elements in the queue.

We can also create a queue using array and use the inbuilt array
 methods to implement the queue functions. The only drawback of
  inbuilt array methods is that they perform operations in O(n) time complexity.
*/

class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + " inserted";
  }

  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  get printQueue() {
    return this.items;
  }
}
