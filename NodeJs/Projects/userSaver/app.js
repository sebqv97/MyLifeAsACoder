const os = require('os')
const express = require('express')
const app = express()


app.set('view engine', 'ejs')

//Start of the program

function userInformation(){
  let userName = os.userInfo().username
  userName =  userName.charAt(0).toUpperCase() + userName.slice(1)
  const homeDir = os.userInfo().homedir
  return `Username: ${userName}, Home Directory: ${homeDir}`
}



//Routes

app.get('/',(req,res)=>{
  userInformation()
  res.render("index.ejs")
})
app.listen(3000,()=> console.log("Ne-am conectat la portul 3000"))