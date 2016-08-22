class Node {
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
		
		
	 if(this.parent){// if has'nt parent
	 	
	 	var childOfLeft = this.left;
	 	
	 	// updates parent.parent
		if(this.parent.right !== this && !this.left && !this.parent.parent){
			this.parent.parent = this; 
			return;// expect(parent.parent).to.equal(child);
		}

		//----------------------

		//updates child.parent
		if(this.parent.parent && !this.parent.parent.right){
			this.parent = this.parent.parent;//expect(child.parent).to.equal(parentOfParent);
			return;
		}
		//----------------------
	 
		 //updates parent.child.parent  
		if(this.parent.right == this && this.parent.left){
		 		this.parent.left.parent = this; //  expect(left.parent).to.equal(right);
		 		return;
		}
		
		//----------------------

		//updates children of node and parent node
		if(this.left){// this = left
			this.right = this.parent.right;//expect(left.right).to.equal(right);
			this.left = this.parent;//expect(left.left).to.equal(root);
			this.parent.left = childOfLeft;//expect(root.left).to.equal(childOfLeft);
			return;
		}
		
		//----------------------

		//maintains correct state of parent.parent.left and parent.parent.right
				
		if (this.parent.parent.left.left == this){
			this.parent.parent.left = this;//expect(root.left).to.equal(childOfLeft);
			return;
		}
		 else if(this.parent.parent.right.left == this){
			this.parent.parent.right = this;//expect(root.right).to.equal(childOfRight);
			return;
		}
		//----------------------
	 }
	}
}

module.exports = Node;
