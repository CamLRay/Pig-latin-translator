------------------ SPECS -------------------

Should not accept an empty string.

Should remove punctuation and whitespace.

It should be case insensitive.

If a number appears first do nothing or return error?

If the word begins with a vowel add way to the end.

If a word begins with one or more consonants, move all of the first consecutive consanants to the end and add "ay" 

If the first consonants include "qu", move the "q" and the "u" to the end of the word and add "ay". 

------------------- Tests ------------------

Describe: pigLatinUtility()

Test: Should not accept an empty string.
code: pigLatinUtlity(" ");
Expected Output: 0;

Test: Should remove punctuation and whitespace. 
Code: pigLatinUtility("hi! hello?")
Expected Output: "hi hello"

Test: Should be case insensitive
Code: pigLatinUtility("hI heLLo?")
Expected Ouput: "hi hello" 

Describe: pigLatin()

Test: Should identify a vowel "a" "e," "i," "o," and "u."
Code: pigLatin("a");
Expected Output: true

Test: Should identify if the first letter of a word is a vowel.
Code: pigLatin("away");
expected Output: true

Test: "It will add 'way' to the end of a word that begins with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "it will add way to any word in a string that starts with a vowel."
Code: pigLatinVowel("angel cat bird arrow")
Expected Output: "angelway cat bird arrowway"

Test: "It will add "q", "u", and "ay" to the end of a word that starts with "qu". 
Code: pigLatin("quest")
Expected Output: estquay

Test: "It will add "q","u". and "ay" to the end of any word in a string that starts with "qu"
code: pigLatin("quest bug cat angel")
Expected Output:"estquay bug cat angelway"

Describe: pigLatinCons()

Test: It will add first consonant to the end of the string and add "ay" to the end of the string.
code: pigLatinCons("code")
Expected Output:"odecay"

Test: It will add two consonants to the end of the string and add "ay" to the end of the string. 
Code: pigLatinCons("skill")
Expected Output: illskay