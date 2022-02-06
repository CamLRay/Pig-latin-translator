function pigLatinUtility(text) {
if (text.trim() === "" && text.includes()){
  return 0;
}
return text.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
}

function pigLatin(text) {
  let textArray = text.split(" ");
  let pigArray = [];
  textArray.forEach(element => {
    if (element[0] === 'a' || element[0] === 'e' || element[0] === 'i' || element[0] === 'o' || element[0] === 'u') {
      pigArray.push(element + "way");
    } 
    else if (element.slice(0,2) === 'qu') {
      pigArray.push(element.slice(2)+"quay")
    }
    else {
      pigLatinCons(text);
    }
  }); 
  return pigArray.join(" ");
} 

// console.log(pigLatin("quest bug cat angel"))

//for (let index = 0; index < array.length; index++) {
  
//}

function pigLatinCons(element){
  let textArray = element.split(" ");
  let vowels = [`a`, `e`, `i`, `o`, `u`];
  let x = 0;
  for (let char = 0; char <= textArray.length; char++){
    if (!textArray){
      x = element.indexOf(char);
      break;
    }
  }
  return element.slice(x) + element.slice(0,x) +"ay";
} 

console.log(pigLatinCons("skill"))




// find the index of the first vowel/q x, slice(x) slice(0,x)
// everything prior is a consonant 

// function test(word){
// let vowels = [`a`, `e`, `i`, `o`, `u`]
// let x =  ;
// console.log(x)
// return word.slice(x) + word.slice(0,x) +"ay"
// }
// console.log(test("skill"))
// //"skill".slice(x) + "skill".slice (0,x) + "ay" 


// // Test: It will add two consonants to the end of the string and add "ay" to the end of the string. 
// // pigLatinCons("skill")
// // Expected Output: illskay

// .replace(/^([aeiouy])(._)/, '$1$2way')
