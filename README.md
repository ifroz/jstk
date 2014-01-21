# JSTK
(JavaScript Toolkit)

## Features

### Matcher

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






