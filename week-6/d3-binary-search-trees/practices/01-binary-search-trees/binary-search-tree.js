// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  // this is performed with recursion
  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }


    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right); // recursive call
      }
    }
  }

  search(val) {
    let currentNode = this.root;
    while(currentNode) {
      if (val < currentNode.val) currentNode = currentNode.left;
      else if (val > currentNode.val) currentNode = currentNode.right;
      else return true;
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // base case
    if(!currentNode) return;
    // print current node
    console.log(currentNode.val);
    // recursive call the left subtree
    this.preOrderTraversal(currentNode.left);
    // recursive call the right subtree
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // this prints out values in order(if it's a correctly ordered binary tree);
    // Your code here
    //base case
    if(!currentNode) return;

    // recursive call on left subtree
    this.inOrderTraversal(currentNode.left);
    //print current node value
    console.log(currentNode.val);
    // recursive call on right subtree
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return;
    // recursive call on left subtree
    this.postOrderTraversal(currentNode.left);
    // recursive call on right subtree
    this.postOrderTraversal(currentNode.right);
    //print current node value
    console.log(currentNode.val);
  }

  // these are the most important algorithms you will ever learn
  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    const queue = [this.root];

    while(queue.length) {
      let currentNode = queue.shift();

      console.log(currentNode.val);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);

    }
  }

  // Depth First Traversal - Iterative

  depthFirstTraversal() {
    // your code here
    const stack = [this.root];

    while (stack.length) {
      let currentNode = stack.pop();

      console.log(currentNode.val);
      if(currentNode.left) stack.push(currentNode.left);
      if(currentNode.right) stack.push(currentNode.right);

    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
