# JSTK
(JavaScript Toolkit)

## Usage

```javascript
var _ = require('lodash');
require('jstk').bind(_);
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

```javascript
var integer = _.toInt('012');

console.log(integer); // 12
```

### getProperty

```javascript
var people = [{
  name: 'John',
  age: 45
},
{
  name: 'Sheela',
  age: 34
}];

var names = _.map(people, _.getProperty('name'));
console.log(names); // ['John', 'Sheela']
```

### callMethod

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  return this.name;
};

var people = [];
people.push(new Person('John', 45));
people.push(new Person('Sheela', 34));

var names = _.map(people, _.callMethod('getName'));
console.log(names); // ['John', 'Sheela']
```

### repeat

```javascript
var letters = _.repeat(5, 'w');
console.log(letters); // ['w', 'w', 'w', 'w', 'w']
```
