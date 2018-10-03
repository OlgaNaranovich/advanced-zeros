module.exports = function getZerosCount(number, base) {
  let b = base;

	let i = 2;
	const simpleMults = [];
	while (i <= b) {
		if (b % i === 0) {
			simpleMults.push(i);
			b = b / i;
			continue;
			if (b === 1) {break;}
		}
		i++;
	}

	let bigNumber = simpleMults[0];
	for (let i = 0, len = simpleMults.length; i < len; i++) {
		if (simpleMults[i] <= simpleMults[i + 1]) {
			bigNumber = simpleMults[i + 1];
		} 
	}
	let countRepeats = simpleMults.filter(item => item === bigNumber).length;
	let zerosCount = 0;
  while (number > 0) {
  	number = Math.floor(number / bigNumber);
  	zerosCount += number;
  }
  return Math.floor(zerosCount / countRepeats);
}