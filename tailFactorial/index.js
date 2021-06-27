//to find the factorial of num
function tailFactorial(num, secondNum = 1) {
	//when the number is zero
	if (num === 0) return secondNum;

	return tailFactorial(num - 1, num * secondNum);
}

//testing the tailFactorial function
console.log(tailFactorial(5));
