//HTML ELEMENTS

const textareaEl = document.querySelector("#random-words");
const inputEl = document.querySelector("#my-keys");
const restartBtn = document.querySelector("#restart");
const timeSpan = document.getElementById("time");

//Global variables
const keyCodes = {
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  d: 68,
  b: 66,
  a: 65,
  s: 83,
  i: 73,
  f: 70,
  k: 75,
  ß: 219,
  Dead: 220,
  "+": 187,
  ü: 186,
  p: 80,
  o: 79,
  u: 85,
  z: 90,
  t: 84,
  r: 82,
  e: 69,
  w: 87,
  g: 71,
  h: 72,
  j: 74,
  l: 76,
  ö: 192,
  ä: 222,
  "#": 191,
  y: 89,
  x: 88,
  c: 67,
  v: 86,
  n: 78,
  m: 77,
  ",": 188,
  ".": 190,
  "-": 189,
  ArrowRight: 39,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowDown: 40,
  PageDown: 34,
  Clear: 12,
  Home: 36,
  PageUp: 33,
  End: 35,
  Delete: 46,
  Insert: 45,
  Control: 17,
  AltGraph: 18,
  Meta: 92,
  Alt: 18,
  Shift: 16,
  CapsLock: 20,
  Tab: 9,
  Escape: 27,
  F1: 112,
  F2: 113,
  ";": 188,
  ":": 190,
  _: 189,
  "'": 191,
  "*": 187,
  Q: 81,
  W: 87,
  E: 69,
  R: 82,
  T: 84,
  Z: 90,
  S: 83,
  A: 65,
  D: 68,
  I: 73,
  U: 85,
  O: 79,
  Y: 89,
  X: 88,
  C: 67,
  F: 70,
  V: 86,
  G: 71,
  B: 66,
  H: 72,
  N: 78,
  J: 74,
  M: 77,
  K: 75,
  L: 76,
  P: 80,
  Ö: 192,
  Ä: 222,
  Ü: 186,
  "!": 49,
  '"': 50,
  "§": 51,
  $: 52,
  "%": 53,
  "&": 54,
  "/": 55,
  "(": 56,
  ")": 57,
  "=": 48,
  "?": 219,
  "°": 220,
};

let timerFired = false;
let timerActive = 0;
let WPM = 0;
let wrongWords = 0;
let correctWords = 0;
let assertions = 0;
let assertionsPerWord = 0;
let currentWord = 0;
let index = 0;
let newInput = "";
let easyWords =
  "should country found answer school grow study still learn plant cover food sun four thought let deep eye never last door between city tree cross since hard start might story saw far sea draw left late run don't while press close night real life few stop the of to and a in is it you that he was for on are with as I his they be at on have this from or had by hot but some what there we can out other were all your when up use word how said an each she which do their time if will way about many then them would write like so these her long make thing see him two has look more day could go come did my sound no most number who over know water than call first people may down side been now find any new work part take get place";
let easyWordsList = easyWords.split(" ");

//start game function

startGame();

function startGame() {
  WPM = wrongWords = correctWords = assertionsPerWord = assertions = 0; //reset scores

  index = currentWord = 0; //reset positions

  timeSpan.textContent = "1:00"; //reset time at 1:00
  if (timerActive) {
    clearTimeout(timerActive);
  }

  textareaEl.innerHTML = "";
  inputEl.value = "";

  // let thirtyElements = easyWordsList.slice(0, 29); //get the first 30  elements(number of words = 30)
  spanCreator(easyWordsList);

  focusWord(); //apply current-word class on first word
}

inputEl.addEventListener("keydown", function (e) {
  //MAKE A COUNTDOWN TIMER
  if (timerFired === false) {
    timerActive = setTimeout(showResults, 60000);
    timerFired = true;
  }

  //verify if key pressed is space
  if (e.code == "Space") {
    mistakeChecker();
    shiftToNextWord(); //Shift word to next one and reset position to first letter
    inputEl.value = ""; //clear the input field
  } else if (e.key == "Backspace") {
    index--;
    checkIfCorrect();
  } else if (keyCodes[easyWordsList[currentWord].charAt(index)] === e.keyCode) {
    index++;
  } else {
    assertionsPerWord++;
    assertions++;
    index++;
    wrongKey();
  }
});

restartBtn.addEventListener("click", startGame);

//create a span element to place into textArea
function spanCreator(thirtyElements) {
  thirtyElements.forEach((element, index) => {
    textareaEl.innerHTML += `<span id = 'span-${index + 1}'>${element} </span>`;
  });
}

function showResults() {
  WPM = wrongWords + correctWords;
  console.log(
    `Words per minute: ${WPM}`,
    `Assertions: ${assertions}`,
    `Correct words: ${correctWords}`,
    `Wrong words: ${wrongWords}`
  );
}

function mistakeChecker() {
  const word = document.getElementById(`span-${currentWord + 1}`);
  if (assertionsPerWord !== 0 || easyWordsList[currentWord].length !== index) {
    wrongWords++;
    word.style.color = "red";
  } else if (assertionsPerWord === 0) {
    correctWords++;
    word.style.color = "green";
  }
  assertionsPerWord = 0;
  word.classList.remove("current-word");
}

function focusWord() {
  const word = document.getElementById(`span-${currentWord + 1}`);
  word.classList.add("current-word");
}

function shiftToNextWord() {
  const word = document.getElementById(`span-${currentWord + 1}`);

  word.classList.remove("wrong-word");
  //Shift word to next one and reset position to first letter
  index = 0;
  currentWord++;
  focusWord();
}

function wrongKey() {
  const word = document.getElementById(`span-${currentWord + 1}`);
  word.classList.add("wrong-word");
}

function checkIfCorrect() {
  newInput = inputEl.value.slice(1, -1); // 1 left space to deal in 2 hrs
  const word = document.getElementById(`span-${currentWord + 1}`);
  if (easyWordsList[currentWord].includes(newInput)) {
    assertionsPerWord = 0;
    word.classList.remove("wrong-word");
  }
}
