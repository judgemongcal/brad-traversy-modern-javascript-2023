class Queue{
    constructor(){
        this._items = [];
        this._count = 0;
        this._front = 0;
    }

    enqueue(item) {
        this._items[this._count] = item;
        this._count++;
    }

    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }

        const item = this._items[this._front];
        for(let i = this._front; i < this._count - 1; i++) {
            this._items[i] = this._items[i+1];
        }

        this._count--;
        this._items.length = this._count;
        return item;
    }

    peek(){
        if(this.isEmpty()) {
            return 'No items found in queue';
        }

        return this._items[this._front];
    }

    length(){
        return this._count - this._front;
    }

    isEmpty() {
        return this._count === 0;
    }
};

const queue = new Queue();

queue.enqueue('Item 1');
queue.enqueue('Item 2');
queue.enqueue('Item 3');
queue.enqueue('Item 4');

console.log('Front Item: ', queue.peek());
console.log('Queue Length: ', queue.length());
queue.dequeue();
console.log(queue);