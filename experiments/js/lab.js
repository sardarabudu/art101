    

// Generates an anagram of a given string.
// credit to ChatGPT
function anagram(inputString) {
    // Convert the string to an array of characters
    const charArray = inputString.split('');
   
    // Use the Fisher-Yates (Knuth) shuffle algorithm to shuffle the characters
    for (let i = charArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
   
    // Join the shuffled characters back into a string
    const anagram = charArray.join('');
   
    // Return the generated anagram
    return anagram;
   }
   
   // given a string, return string in Title Case
   // credit to ChatGPT
   String.prototype.toTitleCase = function() {
     return this.replace(/\w\S*/g, function(txt) {
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
   };