/**Write a program that adds "New" string to a passed string. JIf the string already has "new", return the same string */

//variant 1
const addNew = (str)=>{
  let array = str.split(' ')
  if(array[0] !=='New' && array[0] !=='new')
    array.unshift("New")
   return array.join(" ")
  
}





//variant 2

const addNew2 = (str)=>
                str.indexOf('New')===0? str: `New ${str}`

                console.log(addNew2("New This is nuts"))