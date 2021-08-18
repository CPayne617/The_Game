//box elements from html to be stored as array-like object
const boxes = document.querySelector(".box") 


gameboard.addEventListener("click", e => {
   console.log(e.target.id);
})


const HundredSq = [{
   QuestOne: "What are Spinners?",
   ptValue: 100,
   answer: "Car rims"
}]
if(userInput === HundredSq[0].answer){
   console.log("Correct")
}
// class Hoodpardy {
//    constructor(element, options = {}){
//       this.useCategoryIds = [];
//    }
// }
// starting game
// boxes.innerHTML = 

// const game = new Hoodpardy