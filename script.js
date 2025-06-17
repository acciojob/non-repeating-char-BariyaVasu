function firstNonRepeatedChar(str, input) {
 // Write your code here
	const count = {};

  // Count occurrences of each character
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
	
}
const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 
