/*Write a  JS program that replaces every character of a given string with the next one from the alphabet */


//variant 1

function incrementLetter(letter){
  letter = String.fromCharCode(letter.charCodeAt(0) + 1)
  console.log(letter)
  return letter
}  

const variant1 = (string)=>{
    let charString = Array.from(string)
    charString.forEach(function (element,index){
      charString[index] = incrementLetter(charString[index])
    })
    return newArray.join()

    
    // let newArray =charString.map(char => incrementLetter(char))

    
  }
      

//Variant 2

const variant2 = (str) =>
Array.from(str)
.map(char => String.fromCharCode(char.charCodeAt(0)+1))
.join()


console.log(variant1("abcde"))
console.log(variant2("abcde"))