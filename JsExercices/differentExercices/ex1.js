/*Write a JS function that returns true if  one of two numbers transmited is 100 or if their sum is 100 */

//Variant 1

let variant1 = (a,b)=>{
  if(a === 100 || b === 100 || a + b === 100)
    return true
  return false

}


//Variant 2

let variant2 = (c,d)=>(c === 100 || d === 100 || c + d === 100)? true : false
  



console.log(`${variant1(1001,0)}, ${variant1(0,100)}, ${variant1(9,10)}`)
console.log(`${variant2(1001,0)}, ${variant2(0,100)}, ${variant2(9,10)}`)


variant2(0,0) //false
variant2(100,0) //true
variant2(123,100) //true
variant2(50,50) //true

