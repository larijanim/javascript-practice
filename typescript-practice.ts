function areAnagramsTS(string1: string, string2: string): boolean {
    if (string1.length !== string2.length) {
        return false;
    }

    const charCount: { [key: string]: number } = {};

    for (let char of string1) {
        charCount[char] = charCount[char] + 1 || 1;
    }

    for (let char of string2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

//implement stack
class StackTS<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | string {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop() as T;
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    print(): void {
        console.log(this.items.toString());
    }
}



class QueueTS<T> {
    private items: T[];
    constructor() { this.items = []; }
    enqueue(element: T): void { this.items.push(element); }
    dequeue(): T | string {
        if (this.isEmpty()) { return "Queue is empty"; }
        return this.items.shift() as T;
    }
    front(): T | string { if (this.isEmpty()) { return "Queue is empty"; } return this.items[0]; }
    isEmpty(): boolean { return this.items.length === 0; }
    size(): number { return this.items.length; }
    print(): void { console.log(this.items); }
}

function binarySearchTS(arr: number[], value: number): number {
    let low: number = 0;
    let high: number = arr.length - 1;
    while (low <= high) { const mid: number = Math.floor((low + high) / 2); const guess: number = arr[mid]; if (guess === value) { return mid; } if (guess > value) { high = mid - 1; } else { low = mid + 1; } } return -1;
}


function bubbleSortTS(arr: []) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { // swap elements 
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}



function quickSortTS(arr: number[]): number[] {
    if (arr.length <= 1) { return arr; }
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const left: number[] = []; const right: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] < pivot) { left.push(arr[i]); }
        else if (arr[i] > pivot) { right.push(arr[i]); }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

//linkedlist
class ListNodeTS {
    private val: number;
    public next: ListNodeTS | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
    public getVal(): number {
        return this.val;
    }

}

class LinkedListTS {
    private head: ListNodeTS | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addAtHead(val: number): void {
        let node = new ListNodeTS(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    addAtTail(val: number): void {
        let node = new ListNodeTS(val);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        return current!.getVal();
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index === 0) {
            this.head = this.head!.next;
        } else {
            let current = this.head!;
            for (let i = 0; i < index - 1; i++) {
                current = current.next!;
            }
            current.next = current.next!.next;
        }

        this.size--;
    }
}


// Write a function to implement a binary tree in JavaScript.
class NodeTS {
    public value: number;
    public left: NodeTS | null;
    public right: NodeTS | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // get valuev(): number {
    //     return this.value;
    //   }
}

class BinaryTreeTS {
    private root: NodeTS | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        let node = new NodeTS(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this._insertNode(this.root, node);
        }
    }

    private _insertNode(currentNode: NodeTS, newNode: NodeTS): void {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this._insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    }

    search(value: number): boolean {
        return this._searchNode(this.root, value);
    }

    private _searchNode(currentNode: NodeTS | null, value: number): boolean {
        if (currentNode === null) {
            return false;
        } else if (value === currentNode.value) {
            return true;
        } else if (value < currentNode.value) {
            return this._searchNode(currentNode.left, value);
        } else {
            return this._searchNode(currentNode.right, value);
        }
    }
}

function breadthFirstSearchTS(root) {
    if (!root) return [];
    const queue = [root];
    const result: number[] = [];
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current!.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return result;
}

function dfsTS(node) {
    if (!node) { return; }
    console.log(node.value);
    if (node.left) { dfs(node.left); }
    if (node.right) { dfs(node.right); }
}


function compareTreesTS(tree1, tree2) {
    //check if both trees are empty
    if (!tree1 && !tree2) { return true; }
    // check if both trees are not empty 
    if (tree1 && tree2) {
        // check if the values of the nodes are equal 
        if (tree1.val === tree2.val) {
            // recursively compare the left and right subtrees 
            return compareTrees(tree1.left, tree2.left) && compareTrees(tree1.right, tree2.right);
        }
    }
    // if any of the above conditions are not met, return false
    return false;
}



