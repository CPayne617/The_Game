// call boxes element from html to javascript
const boxes = document.querySelector(".box")
// call modal from html to javascript
const modal = document.querySelector(".modal")


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
   let question = tvQuestions[box.dataset.value]
   console.log("hey where inside category tv and we chose", box.innerHTML)
   modal.style.display = "block"
   modal.innerHTML=question[Object.keys(question)[0]]
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
function categoryMusic(box) {
   let question = musicQuestions[box.dataset.value]
   console.log("hey where inside category music and we chose", box.innerHTML)
   modal.style.display = "block"
   modal.innerHTML=question[Object.keys(question)[0]]
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
function categorySports(box) {
   let question = sportsQuestions[box.dataset.value]
   console.log("hey where inside category sports and we chose", box.innerHTML)
   modal.style.display = "block"
   modal.innerHTML=question[Object.keys(question)[0]]
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
function categoryFoods(box) {
   let question = foodsQuestions[box.dataset.value]
   console.log("hey where inside category tv and we chose", box.innerHTML)
   modal.style.display = "block"
   modal.innerHTML=question[Object.keys(question)[0]]
}

for (let box of gameboard.children) {
   box.addEventListener("click", e => {
      console.log(e.target.id)
      // console.log(e.target.innerHTML)
      if (e.target.classList.contains("miscellaneous")) {
         categoryMiscellaneous(e.target)
      }
   })
}
function categoryMiscellaneous(box) {
   let question = miscellaneousQuestions[box.dataset.value]
   console.log("hey where inside category miscellaneous and we chose", box.innerHTML)
   modal.style.display = "block"
   modal.innerHTML=question[Object.keys(question)[0]]
}


const tvQuestions = [{
   QuestOne: "In The Cosby Show what was Theo Huxtable childhood best friend nickname, who was in love with Denise?",
   ptValue: 100,
   answer: "Cockroach"
},
{
   QuestTwo: "What was the dog name in the movie Next Friday?",
   ptValue: 200,
   answer: "Chico"
},
{
   QuestThree: "What was the clowns name on In Living Color?",
   ptValue: 300,
   answer: "Homie The Clown"
},
{
   QuestFour: "Who was Craig uptight neighbor in the movie Friday",
   ptValue: 400,
   answer: "Stanley"
},
{
   QuestFive: "This Movies main character was named Bruce Leroy aka Leroy Green, and co-starred along side a young Rudy Huxtable (Keisha Knight Pulliam) from The Cosby Show. If you don’t know the answer you Sho’nuff need to learn about the power of the glow!",
   ptValue: 500,
   answer: "The Last Dragon"
},
]
const musicQuestions = [{
   QuestOne: "These originally 5 singers where the next Jackson 5 out of Boston, MA before they added a 6 member out of Washington, D.C.?",
   ptValue: 100,
   answer: "New Edition"
},
{
   Quest: "This musical artist is know by this nickname or monicker “World Boss”?",
   ptValue: 200,
   answer: "This musical artist is know by this nickname or monicker “World Boss”Vybz Kartel"
},
{
   Quest: "This rapper was hired for a gap commercial but plugged a new urban clothing line in said commercial & in the process became the face of that urban clothing line?",
   ptValue: 300,
   answer: "LL Cool J"
},
{
   Quest: "These shoes where made popular by members of the Wu-Tang Clan, especially Ghost Face, and later on by Vybez Kartel",
   ptValue: 400,
   answer: "Clarks Wallabe"
},
{
   Quest: "This Rapper was born in Roxbury, MA and was one half a musical duo along with DJ Premier?",
   ptValue: 500,
   answer: "Guru"
},
]
const sportsQuestions = [{
   QuestOne: "Which NBA team/city has won the most championships in their current location? ",
   ptValue: 100,
   answer: "Boston Celtics"
},
{
   Quest: "This basketball game is played with really no limits to players, in a half court setting. Every player plays for themselves with ones and two pointers.",
   ptValue: 200,
   answer: "Twenty-one"
},
{
   Quest: "This game is played with two basketballs and players lineup behind each other behind the three point line and take turns trying to score before the 1st person. What is the name of this game?",
   ptValue: 300,
   answer: "Knockout"
},
{
   Quest: "This puppet voiced by a famous comedian was the alter ego to a young NBA star in Nike commercials. He had an affection for Tyra Banks, was on Oprah, featured in music videos, & was in a 1997 Nike Super Bowl commercial.  What was the Puppets name?",
   ptValue: 400,
   answer: "Lil Penny"
},
{
   Quest: "This AND1 Mixtape Tour legend was a gifted BIG who with point guard handle. His older brother was also the starting PG for the 90’s Knicks.",
   ptValue: 500,
   answer: "Troy “Escalade” Jackson"
},
]
const foodsQuestions = [{
   QuestOne: "What is the ingredients for The Incredible Hulk?",
   ptValue: 100,
   answer: " Hpnotiq and Hennessy"
},
{
   Quest: "Theses miniature drinks usually came in red, blue, green, orange, and purple. They where a childhood favorite and price couldn’t be beat",
   ptValue: 200,
   answer: "Quarter Juice or Teenies"
},
{
   Quest: "What was most moms response before the millennium when children asked for McDonalds?",
   ptValue: 300,
   answer: "We got McDonalds at home"
},
{
   Quest: "This item can be used with peanut butter, hamburgers, butter, Nutella, hotdogs, sandwiches, etc.. or can be eaten as is ",
   ptValue: 400,
   answer: "Slice bread"
},
{
   Quest: "In Tupac song Thug Passion what was the ingredients to mix this drink? ",
   ptValue: 500,
   answer: "One part Alize, one part Cristal"
},
]
const miscellaneousQuestions = [{
   QuestOne: "What are “Spinners”?",
   ptValue: 100,
   answer: "Car rims"
},
{
   Quest: "If you had two different shoe companies accessories on at the same time, what was this called?",
   ptValue: 200,
   answer: "Perpetrating"
},
{
   Quest: "What does the phrase ghetto bird refer too?",
   ptValue: 300,
   answer: "Helicopter"
},
{
   Quest: "What does the sixties saying “to pull coat” mean?",
   ptValue: 400,
   answer: "To Inform and teach"
},
{
   Quest: "This person has written several books some based on his life in the late sixties early seventies, that sold millions of copies, and where turned into films. He also influences such artists as Jay-Z, Ice-T, and Snoop Dogg.",
   ptValue: 500,
   answer: "Iceberg Slim aka Robert Beck"
},
]

if (userInput === HundredSq[0].answer) {
   console.log("Correct")
}



// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//    modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//    modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//    if (event.target == modal) {
//       modal.style.display = "none";
//    }
// }
// class Hoodpardy {
//    constructor(element, options = {}){
//       this.useCategoryIds = [];
//    }
// }
// starting game
// boxes.innerHTML = 

// const game = new Hoodpardy