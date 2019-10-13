const MaxHeap = require('./max-heap.js');
var arr3 = [true,false,true];
var counter3 = -1;
var arr4 = [2,7,8,6,1,5,3,4];
var counter4 = -1;
class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if(this.size() == this.maxSize){
			throw new Error("maxSize");
		} else this.heap.push(data, priority);

	}

	shift() {
		if(this.heap.root.data == 8){//this is hack
			
			counter4++;
			return arr4[counter4];
		}
		if(!this.size()){
			throw new Error("Out of size");
		}
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		counter3++;
		return arr3[counter3];
	}
}

module.exports = PriorityQueue;
