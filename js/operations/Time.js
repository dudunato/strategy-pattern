var Time = new Operation(function(args) {
  var res = args[0] + ':' + args[1] + ' horas';
  this.setResult(res);
  console.log(':');
});

