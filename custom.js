
let isDivisibleBy10 = (num) => num % 10 === 0;
console.log(isDivisibleBy10(50));
console.log(isDivisibleBy10(47));

//OR

function divisibleBy10(x) {
	let answer;
	if (x % 10 === 0) {
		answer = true;
	} else {
		answer = false;
	}
	return answer;
}
console.log(divisibleBy10(96));