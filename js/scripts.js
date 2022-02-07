function pigLatinUtility(text) {
if (text.trim() === "" && text.includes()){
  return 0;
}
return text.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
}

function pigLatin(text) {
  let textArray = text.split(" ");
  let pigArray = [];
  let vowels = [`a`, `e`, `i`, `o`, `u`];
  
  textArray.forEach(function(element) {
    if (vowels.includes(element[0])) {
      pigArray.push(element + "way");
    } 
    else if (element.slice(0,2) === 'qu') {
      pigArray.push(element.slice(2)+"quay")
    }
    else {
      pigArray.push(pigLatinCons(element));
    }
  }); 
  return pigArray.join(" ");
} 

// console.log(pigLatin("quest bug cat angel"))

//for (let index = 0; index < array.length; index++) {
  
//}

function pigLatinCons(element){
  let vowels = [`a`, `e`, `i`, `o`, `u`, `q`];
  let pigLatinWord = "";
    for (let index = 0; index <= element.length; index++){
      if (vowels.includes(element[index])){
      pigLatinWord = element.slice(index) + element.slice(0,index) + "ay";
      break;
      }
    }
  return pigLatinWord;
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
