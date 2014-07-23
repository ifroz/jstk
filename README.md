# JSTK
(JavaScript Toolkit)

## Usage

```javascript
var _ = require('jstk').bind(require('lodash'));
```

## Features

### Matcher

[Scala like match syntax](http://www.scala-lang.org/old/node/120)

```javascript
var numberMatcher = _.matcher({
	'1': function() {
		return 'one'
	},
	'2': function() {
		return 'two'
	}	
});

console.log(numberMatcher(1)); // 'one'
console.log(numberMatcher(2)); // 'two'
```

### toInt

Always uses 10 as radix.

```javascript
var integer = _.toInt('012');

console.log(integer); // 12
```

### getProperty

Able to handle nested objects using the '.' notation in the keys.

```javascript
var people = [{
  name: {
    first: 'John',
    second: 'Smith'
  },
  age: 45
},
{
  name: {
    first: 'Sheela',
    second: 'Smith'
  },
  age: 34
}];

var names = _.map(people, _.getProperty('name.first'));
console.log(names); // ['John', 'Sheela']
```

### callMethod

Able to handle nested objects using the '.' notation in the keys.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  return this.name;
};

var people = [];
people.push({
  person: new Person('John', 45),
  grade: 'A'
});
people.push({
  person: new Person('Sheela', 34),
  grade: 'B'
});

var names = _.map(people, _.callMethod('person.getName'));
console.log(names); // ['John', 'Sheela']
```

### repeat

```javascript
var letters = _.repeat(5, 'w');
console.log(letters); // ['w', 'w', 'w', 'w', 'w']
```
