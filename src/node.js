class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  appendChild(node) {
    if (!this.left) {
      this.left = node;
      this.left.parent = this;
    }
    else if (!this.right) {
      this.right = node;
      this.right.parent = this;
    }
    return this;
  }

  removeChild(node) {
    if (this.left === node) {
      this.left.parent = null;
      this.left = null;
    } else if (this.right === node) {
      this.right.parent = null;
      this.right = null;
    } else {
      throw new Error('passed node is not a child of this node');
    }
    return this;
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if (this.parent) {
      [this.parent.data, this.data] = [this.data, this.parent.data];
      [this.parent.priority, this.priority] = [this.priority, this.parent.priority];
      [this.parent.left, this.left] = [this.left, this.parent.left];
      [this.parent.right, this.right] = [this.right, this.parent.right];

      if (this.parent.right) this.parent.right.parent = this;
      if (this.right) this.right.parent = this.parent;
      if (this.parent.left) this.parent.left.parent = this;
      if (this.left) this.left.parent = this.parent;

      [this.parent.parent, this.parent] = [this, this.parent.parent];
    }
    return this;
  }
}

module.exports = Node;
