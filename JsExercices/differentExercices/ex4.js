/**Write a program that displays the current date */
const var1 = ()=>{
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  console.log(`${day}/${month}/${year}`)
}

const var2 = (date = new Date())=>{
  
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  console.log(`${day}/${month}/${year}`)
}

var1()
var2()
