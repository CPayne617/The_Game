//box elements from html to be stored as array-like object
const boxes = document.querySelector(".box")


// gameboard.addEventListener("click", e => {
//    console.log(e.target.id);
//    console.log(e.target.classList.contains("tv-movies"));
//    console.log(e.target.classList.contains("tv-movies"))
//    console.log(e.target)
// })
// for(let i = 0; i < gameboard.children.length; i++)

// gameboard.addEventListener("click", e => {

// })
console.log(gameboard.children)

// gameboard.children.forEach(box => {
//    box.addEventListener("click", e=> {
//       console.log(e.target.id)
//    })
// });
for (let box of gameboard.children) {
   box.addEventListener("click", e => {
      // console.log(e.target.id)
      // console.log(e.target.innerHTML)
      if (e.target.classList.contains("tv-movies")) {
         categoryTv(e.target)
      }
   })
}
// create if statments to see if box the inner html equals the point value and then link that to our category question array
function categoryTv(box) {
   console.log("hey where inside category tv and we chose", box.innerHTML)
   }

for (let box of gameboard.children) {
   box.addEventListener("click", e => {
      // console.log(e.target.id)
      // console.log(e.target.innerHTML)
      if (e.target.classList.contains("music")) {
         categoryMusic(e.target)
      }
   })
}
function categoryMusic(box){
   console.log("hey where inside category music and we chose", box.innerHTML)
}

for (let box of gameboard.children) {
   box.addEventListener("click", e => {
      // console.log(e.target.id)
      // console.log(e.target.innerHTML)
      if (e.target.classList.contains("sports")) {
         categorySports(e.target)
      }
   })
}
function categorySports(box){
   console.log("hey where inside category sports and we chose", box.innerHTML)
}

for (let box of gameboard.children) {
   box.addEventListener("click", e => {
      // console.log(e.target.id)
      // console.log(e.target.innerHTML)
      if (e.target.classList.contains("foods-drinks")) {
         categoryFoods(e.target)
      }
   })
}
function categoryFoods(box){
   console.log("hey where inside category foods and we chose", box.innerHTML)
}

for (let box of gameboard.children) {
   box.addEventListener("click", e => {
      // console.log(e.target.id)
      // console.log(e.target.innerHTML)
      if (e.target.classList.contains("miscellaneous")) {
         categoryMiscellaneous(e.target)
      }
   })
}
function categoryMiscellaneous(box){
   console.log("hey where inside category miscellaneous and we chose", box.innerHTML)
}


const tvQuestions= [{
   QuestOne: "What are Spinners?",
   ptValue: 100,
   answer: "Car rims"
}]
if (userInput === HundredSq[0].answer) {
   console.log("Correct")
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
// class Hoodpardy {
//    constructor(element, options = {}){
//       this.useCategoryIds = [];
//    }
// }
// starting game
// boxes.innerHTML = 

// const game = new Hoodpardy