var execute = function() {
  var operationName = document.querySelector('#operation option:checked').value;
  Factory[operationName]();
};
