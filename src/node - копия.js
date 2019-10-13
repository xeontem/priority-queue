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
	 	var thisParent = this.parent;
	 	var constThis = new Node(null,null);
	 	for (var key in this){
	 		constThis[key] = this[key]
	 	};
	 	var constThisParent = new Node(null,null);
	 	for(var hey in this.parent){
	 		constThisParent[hey] = this.parent[hey]
	 	};
	 	
	 	if(this.parent.parent){
	 		this.parent.parent.left = this;
	 		this.left = this.parent;
	 		this.parent = constThisParent.parent;
	 		this.right = constThisParent.right;
	 	 	if(this.left.left){
	 			this.left.left = constThis.left;
	 			this.left.parent = this;
	 			this.left.right = constThis.right;
	 			
	 		};
	 		return;
	 	};
	 	if(!this.parent.parent ){//if swap with root
	 		//this.parent = this;
	 		this.data = thisParent.data;
	 		this.priority = thisParent.priority;
	 		//this.left = thisParent;
	 		//this.parent = constThisParent.parent;
	 		//thisParent.parent = this;	 
	 		if(this.parent.left == this){		
	 			this.right = thisParent.right;
	 			if(this.right){
	 				this.right.parent = this;
	 			}
	 			thisParent.left = this;
	 			thisParent.right = constThis.right;
	 			if(thisParent.right){
	 				thisParent.right.parent = thisParent;
	 			}
	 		} else if(this.parent.right == this){
	 			this.left = thisParent.left;
	 			if(this.left){
	 				this.left.parent = this;
	 			}
	 			thisParent.right = this;
	 			thisParent.left = constThis.left;
	 			if(thisParent.left){
	 				thisParent.left.parent = thisParent;
	 			}

	 		}

	 		thisParent.data = constThis.data;
	 		thisParent.priority = constThis.priority;
	 		
	return;
}
		if(this.parent.left == this){
	 		//this.parent = this;
	 		thisParent.data = this.data;
	 		thisParent.priority = this.priority;
	 		thisParent.right = constThis.right;
	 		if(!this.left && !this.parent.parent){
	 			thisParent.parent = this;
	 		}
	 		this.data = constThisParent.data;
	 		this.priority = constThisParent.priority;
	 		this.right = constThisParent.right;
	 		if(constThisParent.right){
	 			constThisParent.right.parent = this;
	 		};
	 		return;
	 	}

	 	if(this.parent.right == this){
	 		
	 		thisParent.data = this.data;
	 		thisParent.priority = this.priority;
	 		thisParent.left = this.left;
	 		if(thisParent.left){
	 			thisParent.left.parent = thisParent;
	 		}
	 		thisParent.right.parent = this;
	 		thisParent.right.data = constThisParent.data;
	 		thisParent.right.priority = constThisParent.priority;
	 		thisParent.right.left = constThisParent.left;
	 		if(thisParent.right.left){
	 			thisParent.right.left.parent = thisParent.right;
	 		}
	 		thisParent.right.parent = this;
	 		thisParent.right.right = constThis.right;
	 		if(thisParent.right.right){
	 			thisParent.right.right.parent = thisParent.right;
	 		}
	 		this.data = thisParent.data;
	 		this.left = thisParent.left;
	 		this.parent = thisParent.parent;
	 		this.priority = thisParent.priority;
	 		this.right  = thisParent.right;
	 		return;
	 	}
	 	
	 	return;
 	}
}	
}

module.exports = Node;