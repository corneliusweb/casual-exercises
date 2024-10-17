/** 
 * Practice Project: Magic Number Finder!
 * 
 * Let’s create a small game where you’re a magician looking for a "Magic Number" in a series of numbers.
 * Write a loop from 0 to 20.
 * Use break to stop when you find the magic number 13.
 * Use continue to skip numbers that are divisible by 3 (since they’re unlucky!).
 */

for (let i = 0; i <= 20; i++) {
	if (i === 13) {
		console.log('Found ya!');
		break;
	} else if (i % 3 === 0) continue;
	console.log(i);
}

/** 
 * Practice Project: Treasure Hunt with Labels!
 * 
 * Imagine you're in a game where you have two levels of rooms:
 * The first level contains 3 main halls.
 * Each hall contains 3 treasure chests.
 * You want to stop searching all the halls as soon as you find a treasure chest with gold in Hall 2, Chest 2. 
 * Use labels and break to stop the search once you find the treasure.
 */

const halls = ['Hall 1', 'Hall 2', 'Hall 3'];
const chests = ['Chest 1', 'Chest 2', 'Chest 3'];

out: for (let i = 0; i < halls.length; i++) {
	let result = '';
	for (let j = 0; j < chests.length; j++) {
		if (halls[i] === 'Hall 2' && chests[j] === 'Chest 2') {
			result += `Yeah! ${halls[i]}, ${chests[j]} is the combo!!!`;
			console.log(result); // Log result before breakout
			break out;
		} else {
			result += `${halls[i]}, ${chests[j]}\n`;
		}
	}
	console.log(result);
}
