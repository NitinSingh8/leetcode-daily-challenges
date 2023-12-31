var MyStack = function() {
  this.q = [];
  this.peek = -1;
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.peek = x;
  this.q.push(x);
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  const n = this.q.length;
  for(let i = 0;i<n-1;i++){
      this.peek = this.q.shift();
      this.q.push(this.peek);
  }
  return this.q.shift();
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.peek;
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.q.length==0;
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/