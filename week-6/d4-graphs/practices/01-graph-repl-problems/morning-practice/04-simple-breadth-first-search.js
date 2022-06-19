const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  // Your code here
  let queue = [start];
  let visited = new Set();

  visited.add(start);

  while (queue.length) {
    let currentNode = queue.shift();

    // DO THE THING HERE
    if (currentNode === end) return true;

    adjList[currentNode].forEach(neighbor => {
      if(!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    })
  }
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
