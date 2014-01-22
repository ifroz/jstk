# JSTK
(JavaScript Toolkit)

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



