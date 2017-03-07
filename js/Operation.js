var Operation = function(func) {
  this.implementation = func;
};

Operation.prototype.do = function() {
  this.implementation(arguments);
};

Operation.prototype.setResult = function(res) {
  document.querySelector('#res').innerHTML = res;
};
