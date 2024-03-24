if (process.env.REMOTE_JUDGE !== "true") {
  class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }
}

function solution(node, idx) {
  if (idx === 0) {
    return node.next;
  }

  let current = node;
  let prev = null;
  let i = 0;

  while (i < idx) {
    prev = current;
    current = current.next;
    if (current === null) {
      return node;
    }
    i++;
  }

  prev.next = current.next;

  return node;
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  var newHead = solution(node0, 1);
}
