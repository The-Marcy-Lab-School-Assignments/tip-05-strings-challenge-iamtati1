/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/
/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.

Step 1: Translate english to JS
How do we capitalize? 
- .toUpperCase()

First Letter of a word in a sentence? 
- every whitespace is followed by the first letter of a word
  - capitalize the letter after we come across a space (currentIndex + 1 is the one to capitalize)
- edge case: the first letter of the entire sentence

How do we return a new string?
- create a new variable for the new string

We need to capitalize many words (not just one)
- for loop

////////////////////////////
Step 2: Hand Walk

sentence = hello world from javascript
newSentence = He;
i = 1

////////////////////////////
Step 3: Algorithm

Create a newSentence Variable
Loop through every letter - for (let i = 0; i < sentence.length; i+=1)
  If it is the first letter?
    Capitalize it and add it to the newSentence
  If we come across a space
    add the white space to the newSentence
    capitalize the next letter and add it to the string
    increment i by 1 
  If neither, just add it to the newSentence
*/

const capitalizeWords = (sentence) => {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0) {
            newSentence += sentence[i].toUpperCase();
        }
        else if (sentence[i] === " ") {
            newSentence += " ";
            newSentence += sentence[i + 1].toUpperCase();
            i++;
        }
        else {
            newSentence += sentence[i];
        }
    }
    return newSentence;
}

capitalizeWords("hello world from javascript");
// → "Hello World From Javascript"

capitalizeWords("javaScript");

