var Multiplication = new Operation(function(args) {
  var res = parseFloat(args[0]) * parseFloat(args[1]);
  this.setResult(res);
  console.log('*');
});


