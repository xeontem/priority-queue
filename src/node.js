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
      if (this === this.parent.left) {
        [this.parent.right, this.right] = [this.right, this.parent.right];
        if (this.right) this.right.parent = this;
        if (this.parent.right) this.parent.right.parent = this.parent;
        [this.parent.left, this.left] = [this.left, this.parent];
        if (this.parent.left) this.parent.left.parent = this.parent;
      } else {
        [this.parent.left, this.left] = [this.left, this.parent.left];
        if (this.left) this.left.parent = this;
        if (this.parent.left) this.parent.left.parent = this.parent;
        [this.parent.right, this.right] = [this.right, this.parent];
        if (this.parent.right) this.parent.right.parent = this.parent;
      }

      if (this.parent.parent && this.parent === this.parent.parent.left) this.parent.parent.left = this;
      if (this.parent.parent && this.parent === this.parent.parent.right) this.parent.parent.right = this;
      [this.parent.parent, this.parent] = [this, this.parent.parent];
    }
    return this;
  }
}

module.exports = Node;
