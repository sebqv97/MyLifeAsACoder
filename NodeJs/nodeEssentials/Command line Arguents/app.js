/**Write a program that takes the arguments from argv and displays their sum */

const argvs = process.argv.slice(2)
const sum = argvs.reduce((curr,prev)=> curr + parseInt(prev))
console.log(sum)

