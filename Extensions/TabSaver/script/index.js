//GlobalVariables
let favs = []
let oldFavs =[]
//DOMs
//buttons
const inputBtn = document.querySelector("#saveInput-btn")
const deleteAllBtn = document.getElementById("delete-all-btn")
const saveTabBtn = document.getElementById("saveTab-btn")

// elements
const inputEL = document.getElementById('input-el')
const ulEl = document.querySelector('#list-items-el')

//Event listeners
inputBtn.addEventListener('click', ()=>{
  //add element to array
  favs.push(inputEL.value)
  //clear input value
  inputEL.value =''
  //call function renderInputs(<oldArrays>)
  renderInputs(favs)
})

deleteAllBtn.addEventListener('dblclick',()=>{
  //bak-up elements into an array and delete all 
  oldFavs = favs.slice(0)
  favs.length = 0;
  ulEl.innerHTML =''
})

saveTabBtn.addEventListener('click',()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    
  favs.push(tabs[0].url)
  renderInputs(favs)
  })
})

function renderInputs(input){
  //destroy all li's
  ulEl.innerHTML=''
  //traverse the given array and console.log everything
  input.forEach(element => {
    //creating element using InnerHtml
    ulEl.innerHTML+=
    `
    <li>
      <a href='${element}'>${element}</a>
    </li>
    `
  });
}

