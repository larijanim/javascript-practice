function areAnagrams(string1, string2)
 { if (string1.length !== string2.length) 
    { return false; } 
    const charCount = {}; 
    for (let char of string1)
     { charCount[char] = charCount[char] + 1 || 1; }
      for (let char of string2) 
      { if (!charCount[char]) 
        { return false; } 
        charCount[char]--; } 
        return true; } 
   
function Stack() { this.items = []; } 
Stack.prototype.push = function(element) { this.items.push(element); };
Stack.prototype.pop = function() { if (this.items.length === 0) { return "Underflow"; } return this.items.pop(); };
Stack.prototype.peek = function() { return this.items[this.items.length - 1]; }; 
Stack.prototype.isEmpty = function() { return this.items.length === 0; };
Stack.prototype.print = function() { console.log(this.items.toString()); }; 

    class Queue { 
        constructor() 
        { this.items = []; } 
        enqueue(element) { this.items.push(element); } 
        dequeue() { if (this.isEmpty()) { return "Queue is empty"; } 
        return this.items.shift(); } 
        front() { if (this.isEmpty())  { return "Queue is empty"; } return this.items[0]; } 
        isEmpty() { return this.items.length === 0; } 
        size() { return this.items.length; } 
        print() { console.log(this.items); } 
    } 
   
    function binarySearch(arr, value) { let low = 0; let high = arr.length - 1; while (low <= high) { const mid = Math.floor((low + high) / 2); const guess = arr[mid]; if (guess === value) { return mid; } if (guess > value) { high = mid - 1; } else { low = mid + 1; } } return -1; } 
   
function bubbleSort(arr) { 
    const len = arr.length; 
    for (let i = 0; i < len; i++) 
    { for (let j = 0; j < len - i - 1; j++) 
        { if (arr[j] > arr[j + 1]) 
            { // swap elements 
                const temp = arr[j];
                    arr[j] = arr[j + 1]; 
                    arr[j + 1] = temp; 
                } } }
                    return arr;
                    } 


   
 function quickSort(arr)
  { if (arr.length <= 1) { return arr; } 
  const pivot = arr[Math.floor(Math.random() * arr.length)]; 
  const left = []; const right = []; 
  for (let i = 0; i < arr.length; i++) 
  { if (arr[i] < pivot) { left.push(arr[i]); }
   else if (arr[i] > pivot) { right.push(arr[i]); } } 
   return [...quickSort(left), pivot, ...quickSort(right)]; } 
   

   class ListNode {
     constructor(val) 
     { this.val = val; 
        this.next = null; } } 
   class LinkedList 
   { constructor() { this.head = null; this.size = 0; } 
   addAtHead(val) { let node = new ListNode(val); node.next = this.head; this.head = node; this.size++; } 
   addAtTail(val) { let node = new ListNode(val); if (!this.head) { this.head = node; } else { let current = this.head; while (current.next) { current = current.next; } current.next = node; } this.size++; } 
   get(index) { if (index < 0 || index >= this.size) return -1; let current = this.head; for (let i = 0; i < index; i++) { current = current.next; } return current.val; }
deleteAtIndex(index) { if (index < 0 || index >= this.size) return; if (index === 0) { this.head = this.head.next; } else { let current = this.head; for (let i = 0; i < index - 1; i++) { current = current.next; } current.next = current.next.next; } this.size--; } } 
   
//34. Write a function to implement a binary tree in JavaScript.
class Node { constructor(value)
     { this.value = value; 
        this.left = null; 
        this.right = null; } } 
    class BinaryTree 
    { constructor() { this.root = null; } 
    insert(value) { let node = new Node(value);
         if (this.root === null) { this.root = node; } 
         else { this._insertNode(this.root, node); } }
     _insertNode(currentNode, newNode) 
     { if (newNode.value < currentNode.value) 
        { if (currentNode.left === null) 
            { currentNode.left = newNode; } 
            else { this._insertNode(currentNode.left, newNode); } } 
       else { if (currentNode.right === null)
         { currentNode.right = newNode; } 
         else { this._insertNode(currentNode.right, newNode); } } } 
         search(value) { return this._searchNode(this.root, value); }
          _searchNode(currentNode, value) 
          { if (currentNode === null) { return false; } 
          else if (value === currentNode.value) { return true; } 
          else if (value < currentNode.value) { return this._searchNode(currentNode.left, value); } 
          else { return this._searchNode(currentNode.right, value); } } } 
   
  function breadthFirstSearch(root) 
          { if (!root) return []; 
            const queue = [root]; const result = []; 
            while (queue.length > 0) 
            { const current = queue.shift(); 
                result.push(current.value); 
                if (current.left) queue.push(current.left); 
                if (current.right) queue.push(current.right);
             } 
                return result; } 

function dfs(node) 
{ if (!node) { return; } 
console.log(node.value); 
if (node.left) { dfs(node.left); }
if (node.right) { dfs(node.right); } } 
   

function compareTrees(tree1, tree2) { 
    //check if both trees are empty
     if (!tree1 && !tree2) { return true; }
      // check if both trees are not empty 
      if (tree1 && tree2) {
         // check if the values of the nodes are equal 
         if (tree1.val === tree2.val) {
             // recursively compare the left and right subtrees 
            return compareTrees(tree1.left, tree2.left) && compareTrees(tree1.right, tree2.right); } }
              // if any of the above conditions are not met, return false
    return false; } 
   


