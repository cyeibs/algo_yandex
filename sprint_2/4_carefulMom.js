if (process.env.REMOTE_JUDGE !== "true") {
  class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
}

function solution(node, elem) {
  if (node.value === elem) {
    return 0;
  }

  let current = node;
  let i = 1;

  while (current.next !== null) {
    current = current.next;
    if (current.value === elem) {
      return i;
    }
    i++;
  }

  return -1;
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  var idx = solution(node0, "node2");
}
