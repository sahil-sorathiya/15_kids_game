import * as utils from "./utils.js"
import * as data from "./data.js"

let total_cards;
let total_moves;
let remainedMoves;

//: Fetching Game mode: "Easy", "Medium", "Hard"
//: ----------------- Start ----------------- ://
const gameMode = utils.get_query_parameters_of_url_by_name("mode")

if(gameMode == "easy"){
    total_cards = 6
	total_moves = 10
} else if(gameMode == "medium"){
    total_cards = 10
	total_moves = 20
} else {
    total_cards = 14
	total_moves = 30
}
remainedMoves = total_moves
//: ----------------- End ----------------- ://


//: Navigation Buttons "Restart" & "Back to Menu"
//: ----------------- Start ----------------- ://
const restartBtn = document.getElementById("restart-btn")
const menuBtn = document.getElementById("menu-btn")

restartBtn.addEventListener("click", ()=>{
	window.location.reload()
})

menuBtn.addEventListener("click", ()=>{
	window.location.href = "/Game 3/game3.html";
})
//: ----------------- End ----------------- ://

//: Initial loading function on page load
//: ----------------- Start ----------------- ://
window.onload = loadWindow()

async function loadWindow(){
	const randomNumbers = utils.randomSelect(0, data.dataArray.length - 1, total_cards);
	const cards = await utils.getShuffeledArrayOfCards(randomNumbers, total_cards)
	//: Loading animation
	const svg1 = document.getElementById("svg1")
	svg1.innerHTML = `<svg class="bike" viewBox="0 0 48 30" width="48px" height="30px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><g transform="translate(9.5,19)"><circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549"/><g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562"><circle class="bike__spokes" r="5"/><circle class="bike__spokes" r="5" transform="rotate(180,0,0)"/></g></g><g transform="translate(24,19)"><g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)"><circle class="bike__pedals" r="4"/><circle class="bike__pedals" r="4" transform="rotate(180,0,0)"/></g></g><g transform="translate(38.5,19)"><circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549"/><g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562"><circle class="bike__spokes" r="5"/><circle class="bike__spokes" r="5" transform="rotate(180,0,0)"/></g></g><polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5"/><polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79"/><path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10"/><polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19"/></g></svg>`
	svg1.innerHTML += `<h1 class="text-3xl font-medium">Loading...</h1>`
	
	//: Manual loading for 1.5 sec
	setTimeout(loadGameScreen, 1500)

	//: Load Main game screen
	function loadGameScreen(){
		//: Loading all cars on page after 1.5 sec
		utils.loadCards(cards, remainedMoves)
		//: Remove loading animation
		svg1.innerHTML = ""

		const cardsOfDom = Array.from(document.getElementsByClassName("flip-it"))
		let isOneCardVisible = false
		let idOfVisible = -1
		let visibleCard = {}
		let successCount = 0
		let totalClicks = 0


		//: Set onClick EventListner on all cards
		cardsOfDom.forEach(card=>{
			card.addEventListener("click", onCardClickHandler)
		})

		function onCardClickHandler(e){
			//: Sound of card flip
			utils.addAudio("../../public/sounds/card-flip-sound-2.mp3", 1500)
			
			//: If first card of pair is opened 
			if(!isOneCardVisible){
				e.target.parentElement.style.transform = "rotateY(180deg)"
				isOneCardVisible = true
				idOfVisible = e.target.title
				visibleCard = e.target.parentElement
				return;
			}

			//: If second card of pair is opened
			const row1 = document.getElementById("row1")
			const row2 = document.getElementById("row2")
			const remainedMovesDiv = document.getElementById("remained-moves")
			e.target.parentElement.style.transform = "rotateY(180deg)"
			totalClicks++
			remainedMoves--

			//: If no moves remained then user lost the game
			if(remainedMoves == 0){
				utils.loadLostGameScreen(row1, row2, remainedMovesDiv)
				return;
			}

			//: If idOfVisible card != e.target.id
			if(idOfVisible != e.target.title){
				//: Sound of wrong pair of card selection
				utils.addAudio("../../public/sounds/buzz-buzz-sound.mp3", 1500)
				//: Flip pair of card
				utils.flipBothCards(e, visibleCard)
				//: Update remained moves on screen
				remainedMovesDiv.innerHTML = `<h1 class="text-3xl"> Remained Moves : ${remainedMoves}</h1>`
				isOneCardVisible = false
				idOfVisible = -1
				return;
			}

			//: If idOfVisible card == e.target.id
			//: Sound of correct pair of card selection
			utils.addAudio("../../public/sounds/card-matched.mp3", 1500)
			successCount++
			isOneCardVisible = false
			idOfVisible = -1
			visibleCard = {}
			//: Updating remained moves on screen
			remainedMovesDiv.innerHTML = `<h1 class="text-3xl"> Remained Moves : ${remainedMoves}</h1>`

			//: If all pairs opened, User won
			if(successCount === total_cards/2){
				utils.loadWinGameScreen(row1, row2, remainedMovesDiv, total_moves, total_cards, remainedMoves)
			}
		}
	}
}