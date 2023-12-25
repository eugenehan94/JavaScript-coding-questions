// Hash tables do not allow duplicates

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // Create hashing function
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    // Makes sure the total is never out of bounds
    return total % this.size;
  }

  // Create set method
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  // Create get method
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  // Create remove method
  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}


const table = new HashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
table.display();
console.log(table.get("name"));
// table.set("mane", "Clark");
// table.set("name", "Diana");
console.log(table.get("mane"));
table.remove("name");
table.display();

console.log("-------------------Test 2------------------------")
const ht = new HashTable(127);

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();

console.log(ht.size);
ht.remove("Spain");
ht.display();