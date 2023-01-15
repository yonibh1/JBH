class Node<T> {
    private _data: T;
    private _next: Node<T> | null;

    constructor(data: T, next: Node<T> | null) {
        this._data = data;
        this._next = next;
    }

    public get data(): T {
        return this._data;
    }
    public set data(value: T) {
        this._data = value;
    }

    public get next(): Node<T> | null {
        return this._next;
    }
    public set next(value: Node<T> | null) {
        this._next = value;
    }
}





export class Stack<T> {
    private _head: Node<T> | null;
    private _size: number;
    constructor() {
        this._head = null;
        this._size = 0;
    }

    public push(data: T): void {
        let newNode = new Node(data, null);
        if (this._head === null) {
            this._head = newNode;
        } else {
            newNode.next = this._head;
            this._head = newNode;
        }
        this._size++;
    }

    public pop(): T | null {
        if (this._head === null) return null;
        let temp = this._head;
        this._size--; 
        this._head = temp.next;
        return temp.data;
    }

    get size(): number {
        return this._size;
    }

}

const numberStack = new Stack<number>();
for (let i = 0; i < 50000; i++) {
    numberStack.push((Math.round(Math.random() * 100000)));
}
console.log(numberStack);
numberStack.pop();
console.log(numberStack);







class Queue {
    items: any[];

    constructor(...params: any[]) {
        console.log(params);
        this.items = [...params];
    }

    enqueue(item: any) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    getItems() {
        return this.items
    }


}
let d = new Queue([556, 40, 3, 266, 1]);
console.log(d.dequeue());





