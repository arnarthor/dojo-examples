exports.objectConversion = function() {
  return {hello: 'World', Name: 'Arnar'};
};

exports.objectWithVariantConversion = function() {
  return {
    hello: 'World',
    someStateConstant: Math.random() * 10 > 5 ? 'Yuge' : 'Less than five'
  };
};

exports.nestedObjectConversion = function() {
  return {
    nested1: {
      nested2: {
        hello: 'World'
      }
    }
  };
};

exports.arrayWithVariants = function() {
  return ['Yuge', 'Yuge', 'Less than five', 'foobar'];
};

exports.logForMe = function(argument) {
  if (argument == 'Yuge') {
    console.log("Wow, that's big");
  } else if (argument == 'Less than five') {
    console.log('Pretty small');
  } else {
    console.log('How did this happen?');
  }
};
