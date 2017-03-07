var get = function(id) {
  return document.querySelector('#' + id).value;
};

var Factory = {
  addition: function() {
    Addition.do(get('n1'), get('n2'))
  },
  subtraction: function() {
    Subtraction.do(get('n1'), get('n2'))
  },
  division: function() {
    Division.do(get('n1'), get('n2'))
  },
  multiplication: function() {
    Multiplication.do(get('n1'), get('n2'))
  },
  time: function() {
    Time.do(get('n1'), get('n2'))
  },
  all: function() {
    All.do(get('n1'), get('n2'), 'Done!')
  }
};
