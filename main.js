function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence.charAt(i);
  
      // Increment the sentence length counter for each character
      sentenceLength++;
  
      // Check if the character is a letter (for word count)
      if (char.match(/[a-zA-Z]/)) {
        // If the character is a letter and the previous character was not a letter or space, increment the word count
        if (i === 0 || !sentence.charAt(i - 1).match(/[a-zA-Z\s]/)) {
          wordCount++;
        }
  
        // Check if the character is a vowel (case-insensitive)
        if (char.match(/[aeiouAEIOU]/)) {
          vowelCount++;
        }
      }
    }

        // Output the results
        console.log("Sentence Length: " + sentenceLength);
        console.log("Number of Words: " + wordCount);
        console.log("Number of Vowels: " + vowelCount);
      }
      
      // Example usage:
      const inputSentence = "This is a sample sentence.";
      analyzeSentence(inputSentence);
