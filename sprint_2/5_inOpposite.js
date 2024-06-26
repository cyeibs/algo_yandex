if (process.env.REMOTE_JUDGE !== "true") {
  class Node {
    constructor(value = null, next = null, prev = null) {
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }
}

function solution(head) {
  let node = head;

  while (node !== null) {
    [node["prev"], node["next"]] = [node["next"], node["prev"]];
    head = node;
    node = node.prev;
  }

  return head;
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  node1.prev = node0;
  node2.prev = node1;
  node3.prev = node2;
  var newHead = solution(node0);
}
