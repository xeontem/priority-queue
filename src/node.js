var  chekSwap = 0;
class Node {

	chekSwapWithRoot (){
		return chekSwap;
	}

	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if(!this.left){
			this.left = node;
			node.parent = this;
		}

		else if(!this.right){
			this.right = node;
			node.parent = this;
		}
		else return;
		
	}

	removeChild(node) {
		
		if(this.left == node){
			this.left = null;
		}
		else if(this.right == node){
			this.right = null;
		}
		else throw new Error("Passed node is not a child of this node");
		node.parent = null;
	}

	remove() {
		if(!this.parent) return;
		this.parent.removeChild(this);
	}
	swapWithParent() {
		if (!this.parent) {
			return;
		}
		var thisParent = this.parent;
		var thisLeft = this.left;
		var thisRight = this.right;
		if (this.parent.parent) {
			if (this.parent == this.parent.parent.left) {//if leftchild
				this.parent.parent.left = this;
			}
			else {//if rightchild
 			 	this.parent.parent.right = this;
			}
			this.parent = this.parent.parent;
		}
		else {
			this.parent = null;
		}
		if (this == thisParent.left) {
			this.left = thisParent;
			this.right = thisParent.right;
		}
		else {
			this.left = thisParent.left;
			this.right = thisParent;
		}
		thisParent.left = thisLeft;
		thisParent.right = thisRight;
		if (this.left) {
			this.left.parent = this;
		}
		if (this.right) {
			this.right.parent = this;
		}
		if (thisParent.left) {
			thisParent.left.parent = thisParent;
		}
		if (thisParent.right) {
			thisParent.right.parent = thisParent;
		}
	}
}
module.exports = Node;