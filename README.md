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

Able to handle nested objects using array or the '.' notation in the keys.

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
var names = _.map(people, _.getProperty(['name', 'first']));
console.log(names); // ['John', 'Sheela']
```
<!--
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
-->
### repeat

```javascript
var letters = _.repeat(5, 'w');
console.log(letters); // ['w', 'w', 'w', 'w', 'w']
```

### recursiveMapValues

Recursive version of mapValues. Keys are returned as an array in the iterator
function.

```javascript
var obj = recursiveMapValues({a: 1, b: {c: 1}}, function(e) {
  return e * 2;
});
console.log(obj); // {a: 2, b: {c: 2}}

var obj2 = recursiveMapValues({a: 1, b: {c: 1}}, function(value, keys) {
  return keys.join('.');
});
console.log(obj2); // {a: 'a', b: {c: 'b.c'}}
```

### append/prepend, chainable commons

Chainable versions of pop, push shift and unshift. pop and unshift are aliased as prepend and append respectively.

```javascript
var a = _.range(10);

_(a).pop((value) => {
  console.log(a); // --> 9
}).value()
```

### sortArgs(arguments)

Creates a regular array from an ``arguments`` object.

```javascript
function fn() {
  console.log(_.sortArgs(arguments));
}

fn(1,2,3) // --> [1,2,3]
```

### unpluck

Opposite of ``pluck``. Wraps all elements of an array in an object with the key given

```javascript
var obj = {a: {x: 1}, b {x: 2, loss: 'x'}};
var plucked = _.pluck(obj, 'b') // --> {a: 1, b: 2};
_.unpluck(plucked, 'y') // --> {a: {y: 1}, b: {y: 2}}
```

### chunk

```javascript
_.chunk(_.range(10), 3) // ---> [[0,1,2], [3,4,5], [6,7,8], [9]]
```