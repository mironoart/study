var PersonBuilder = require('./PersonBuilder');

/* 
// PROBLEM -- cant understand what is true true etc...
var sue = new Person('Sue', true, true, 60);
var bill = new Person('Bill', true, false, 20);
var phil = new Person('Phil', true, false);

 */
var sue = new PersonBuilder('Sue')
	.makeEmployee()
	.makeManager(60)
	.build();

var bill = new PersonBuilder('Bill')
	.makeEmployee()
	.makePartTime(60)
	.build();

var phil = new PersonBuilder('Phill').makeEmployee().build();

var charles = new PersonBuilder('Charles')
	.withMoney(500)
	.withList(['jeans', 'sunglasses'])
	.build();

var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log('TCL: sue', sue);
console.log('TCL: bill', bill);
console.log('TCL: phil', phil);
console.log('TCL: charles', charles);
console.log('TCL: tabbitha', tabbitha);
