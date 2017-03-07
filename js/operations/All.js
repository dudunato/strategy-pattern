var All = new Operation(function(args) {
  var res1 = parseFloat(args[0]) * parseFloat(args[1]);
  var res2 = parseFloat(args[0]) / parseFloat(args[1]);
  var res = res1 +  ' and ' + res2;
  this.setResult(res + ' ' + args[2]);
  console.log('All');
});


