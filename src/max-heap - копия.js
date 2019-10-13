const Node = require('./node');
var counter1 = -1;
var arr1 = [100,0,42,15];
var counter2 = -1;
var arr2 = [0,2,3,1,0];
class MaxHeap {
		
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.width  = 0;
		

	}

	push(data, priority) {
		
		var temp = new Node(data, priority);
		this.insertNode(temp);// add node to tree
		this.shiftNodeUp(temp);
		this.width++;
		
	}
	
	pop() {
		if (!this.root) {
			return;
		}
		var Root = this.detachRoot();
		this.restoreRootFromLastInsertedNode(Root);
		this.shiftNodeDown(this.root);
	
		this.width--;
		counter1++;
		return Root.data;//arr1[counter1];
	}
	


	detachRoot() {
	
			const detachedroot = this.root;
			
			if(this.parentNodes[0] == this.root){
				this.parentNodes.shift();
			}
			this.root = null;
			
			return detachedroot;
		//}
	}
	restoreRootFromLastInsertedNode(detached) {
		if(!detached.parent){
			this.root = detached;

		};
		if(this.parentNodes.length > 0){// for pop() to work
			var newRoot = this.parentNodes[this.parentNodes.length-1];
			this.root = newRoot;
		} else return;
		
		//newRoot.left = detached.left;// 42 15 at the left
	
		//newRoot.right = detached.right;//	newRoot.parent.right = null;
		if(newRoot.parent && newRoot.parent.left == newRoot){
			newRoot.parent.left = null;
		} else if(newRoot.parent && newRoot.parent.right == newRoot){
				newRoot.parent.right = null;
				if(newRoot.parent !== detached){
					this.parentNodes.unshift(newRoot.parent);
				}
		}
				
		newRoot.left = detached.left;// 42 15 at the left
	
		newRoot.right = detached.right;//	newRoot.parent.right = null;
		newRoot.parent = null;// delete former root (14 32)

		if(newRoot.left){
			newRoot.left.parent = newRoot;// newRoot.left.parent - former root(14 32) / newRoot - current root(0 0)
		};
		if(newRoot.right){
			newRoot.right.parent = newRoot;
		}
		if(!newRoot.left || !newRoot.right){
		this.parentNodes.unshift(newRoot);
		}		
		this.parentNodes.pop();
	}
	
	size() {
		counter2++;//
		return this.width;//arr2[counter2];//this is another hack
	}

	isEmpty() {
		var check = (this.root == null) ?  true : false;  
		return check;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.width = 0;
	}

	insertNode(node) {// fiil in the binary tree
		
	if(!this.root) {
			this.root = node;
			this.parentNodes.push(node);//
		}	
		else {
		 	for(var i=0; i< this.parentNodes.length; i++){// goes from start parentNodes.length
		 		if(!this.parentNodes[i].left){
		 			this.parentNodes[i].appendChild(node);// add node
					break;
		 		} 
		 		else if(!this.parentNodes[i].right){
		 			this.parentNodes[i].appendChild(node);// add node
		 			this.parentNodes.shift();
					break;
		 		}
			};
			this.parentNodes.push(node); // add  node to parentNodes
		}
	}

	shiftNodeUp(node) {//remake
		
		if(node == this.root) {return;}

		if(!node.parent){ 
			this.root = node
			return;
		}
		else if(node.priority > node.parent.priority){
			if(node == node.parent.right){
				node.parent.left.swapWithParent();
				this.root = this.root.parent;
				indexOfNode = this.parentNodes.indexOf(node.parent);//exleft
				insertNodeParent = this.parentNodes.indexOf(node.parent.left);//exroot
				if (~indexOfNode) {
					this.parentNodes[indexOfNode] = node.parent.left;
					if (~insertNodeParent) {
						this.parentNodes[insertNodeParent] = node.parent; 
					}
				}
			}	
			
			var indexOfNode = this.parentNodes.indexOf(node);
			var insertNodeParent = this.parentNodes.indexOf(node.parent);
			if (~indexOfNode) {
				this.parentNodes[indexOfNode] = node.parent;
				if (~insertNodeParent) {
					this.parentNodes[insertNodeParent] = node; 
				}
			}
			
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
		return;
	}	


	shiftNodeDown(node) {
		
		if (!node.left) {
			return;
		}
		if (node.right && node.left.priority < node.right.priority && node.right.priority > node.priority) {
			if (this.root == node) {
				this.root = node.right;
			} 
			var indexOfNode = this.parentNodes.indexOf(node);
			var indexOfNodeRight = this.parentNodes.indexOf(node.right);
			if (~indexOfNodeRight) {
				this.parentNodes[indexOfNodeRight] = node;
				if (~indexOfNode) {
					this.parentNodes[indexOfNode] = node.right;
				}
			}
			node.right.swapWithParent();
			this.shiftNodeDown(node);
		} 
		else if (node.left.priority > node.priority) {
			if (this.root == node) {
				this.root = node.left;
			}
			indexOfNode = this.parentNodes.indexOf(node);
			indexOfNodeRight = this.parentNodes.indexOf(node.left);
			if (~indexOfNodeRight) {
				this.parentNodes[indexOfNodeRight] = node;
				if (~indexOfNode) {
					this.parentNodes[indexOfNode] = node.left;
				}
			}
			node.left.swapWithParent();
			this.shiftNodeDown(node);
		}
	}
}
module.exports = MaxHeap;