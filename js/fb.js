/*******************************/
/* 								
/* CSCI-E32 September 2, 2015
/* Assignment 0
/* fizzbuzz / fork / pull
/* 
/* Kate de Bethune
/* 
/***************************/

'use strict';

function fizzBuzz(x) {  
	var lim = x, y = 1;   
	for (; y <= lim; y++) {    
		if (y % 3 == 0 && y % 5 == 0) {      
			console.log('FizzBuzz');     
		}      
		else if (y % 3 == 0) {       
			console.log('Fizz');     
		}      
		else if (y % 5 == 0) {       
			console.log('Buzz');     
		}     
		else {      
		 	console.log(y);     
		}   
	} 
} 

fizzBuzz(120); 
