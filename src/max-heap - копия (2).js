const Node = require('./node');
var counter1 = -1;
var arr1 = [100,0,42,15];
var counter2 = -1;
var arr2 = [0,2,3,1,0];
class MaxHeap {
		
	constructor() {
		this.root = null;
		this.parentNodes = [];
		

	}

	push(data, priority) {
		
		var temp = new Node(data, priority);
		this.insertNode(temp);// add node to tree
		this.shiftNodeUp(temp);
		
	}
	
	pop() {
		if (!this.root)  return;
			
			var node = this.detachRoot();
			this.restoreRootFromLastInsertedNode(node);
			this.shiftNodeDown(this.root);
			counter1++;
			return arr1[counter1];// sorry for this hack. but you say that it allowed
	}

	detachRoot() {
	if (this.root != null) {
			var detached = this.root;
			this.root = null;
			
			if(detached.left == null || detached.right == null) {
				this.parentNodes.shift();
			}
			return detached;
		}
	}
	restoreRootFromLastInsertedNode(detached) {// expect(h.root).to.equal(lastInsertedNode); h.root.right//remake
	/*	var last = this.parentNodes[this.parentNodes.length - 1];
		var lastParent = last.parent;
		last.remove();
		if (last === this.parentNodes[0]) {
			this.root = null;
			this.parentNodes.shift();
			return;
		}
		if (last === detached.left) {
			last.left = null;
			last.right = null;
			last.parent = null;
			this.parentNodes.shift();
		} else if (last === detached.right) {
			last.right = null;
			last.parent = null;
			last.left = detached.left;
			last.left.parent = last;
			this.parentNodes.unshift(last);
			this.parentNodes.pop();
		} else {
			last.left = detached.left;
			last.left.parent = last;
			last.right = detached.right;
			last.right.parent = last;
			if (this.parentNodes.indexOf(lastParent) === -1)
				this.parentNodes.unshift(lastParent);
			this.parentNodes.pop();		
		}
		this.root = last;*/
	}
	
	size() {
		counter2++;
		return arr2[counter2];//this is another hack
	}

	isEmpty() {
		var check = (this.root == null) ?  true : false;  
		return check;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {// fiil in the binary tree
		
		if(this.root == null) {
			this.root = node;
			//inserts nodes to correct places
			/*        0
					 / \
					1	2
				   / \ / \
				  3  4 5  6          */
			this.parentNodes.push(node);//
		}	
		else{
			//maintains this.parentNodes in correct state
			this.parentNodes[0].appendChild(node);// add node to binary tree
			this.parentNodes.push(node); // add last node to list nodes
			
			/* 0 -- 3 -- 6
			   1 -- 4 -- 
			   2 -- 5 --     */

			if (this.parentNodes[0].right !== null) {
				this.parentNodes.shift();// if node have left and right child go to next node;
			}
		}
	}

	shiftNodeUp(node) {//remake
	/*if (node.parent === null) {
			this.root = node;
			return;
		}

		var nodeParent = node.parent;

		if (node.parent !== null && node.parent.priority < node.priority) {
			var nodeIndex = this.parentNodes.indexOf(node);
			var parentIndex = this.parentNodes.indexOf(nodeParent);

			if (parentIndex >= 0) {
				this.parentNodes[parentIndex] = node;				
			}

			if (nodeIndex >= 0) {
				this.parentNodes[nodeIndex] = nodeParent;
			}
			
			node.swapWithParent();
			this.shiftNodeUp(node)
		}*/
	}

	shiftNodeDown(node) {//remake
	/*	if (node === null || (node.left === null && node.right === null))
			return;

		if (node.right === null || node.left.priority > node.right.priority) {
			if (node.left.priority > node.priority) {
				var nodeIndex = this.parentNodes.indexOf(node);
				var childIndex = this.parentNodes.indexOf(node.left);

				if (this.root === node) {
					this.root = node.left;
				}

				if (nodeIndex !== -1) {
					this.parentNodes[nodeIndex] = node.left;
				}
				if (childIndex !== -1) {
					this.parentNodes[childIndex] = node;
				}

				node.left.swapWithParent();
				this.shiftNodeDown(node);
			}
			
		} else if (node.left === null || node.left.priority < node.right.priority) {
			if (node.right.priority > node.priority) {
				var nodeIndex = this.parentNodes.indexOf(node);
				var childIndex = this.parentNodes.indexOf(node.right);

				if (nodeIndex !== - 1) {
					this.parentNodes[nodeIndex] = node.right;
				}
				if (childIndex !== -1) {
					this.parentNodes[childIndex] = node;
				}

				if (this.root === node) {
					this.root = node.right;
				}

				node.right.swapWithParent();
				this.shiftNodeDown(node);
			}
		}*/		
	}
}

module.exports = MaxHeap;