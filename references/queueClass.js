class Queue {
    constructor(){
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(item){
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + ' inserted'
    }
}