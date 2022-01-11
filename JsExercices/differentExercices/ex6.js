/**Write two functions, one that capitalizes the first letter of a given sentence, and another one that capitalizes every letter of every word */

const justFirst = (str)=>
str[0].toUpperCase() + str.splice(1)


console.log(justFirst("seba este bossul"))

const everyWord = (str)=> 
str.split(" ")
.map(justFirst)
.join(" ")





console.log(everyWord("seba seba seba"))