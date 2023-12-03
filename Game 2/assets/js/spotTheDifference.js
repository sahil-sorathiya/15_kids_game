import * as utils from "./utils.js"

var i = utils.rand();

//: Fetching Game mode: "Easy", "Medium", "Hard"
//: ----------------- Start ----------------- ://
{
const gameMode = utils.get_query_parameters_of_url_by_name("mode")

if(gameMode == "easy"){
    i = utils.rand() % 3;
} else if(gameMode == "medium"){
    i = 3 + (utils.rand() % 4);
} else {
    i = 7 + (utils.rand() % 4);
}
}
//: ----------------- End ----------------- ://

//: Navigation Buttons "Restart" & "Back to Menu"
//: ----------------- Start ----------------- ://
{
const restartBtn = document.getElementById("restart-btn")
const menuBtn = document.getElementById("menu-btn")

restartBtn.addEventListener("click", ()=>{
	window.location.reload()
})

menuBtn.addEventListener("click", ()=>{
	window.location.href = "/Game 2/game2.html";
})
}
//: ----------------- End ----------------- ://

const differences = [
    [{ coords: [100, 20, 50], number: 1 }, { coords: [240, 120, 50], number: 2 }, { coords: [125, 285, 50], number: 3 }],

    [{ coords: [90, 55, 50], number: 1 }, { coords: [130, 240, 50], number: 2 }, { coords: [240, 300, 50], number: 3 }],

    [{ coords: [85, 270, 50], number: 1 }, { coords: [210, 160, 50], number: 2 }, { coords: [25, 190, 50], number: 3 }],

    [{ coords: [70, 60, 80], number: 1 }, { coords: [320, 345, 80], number: 2 }, { coords: [310, 50, 80], number: 3 },{ coords: [140, 360, 80], number: 4 },{ coords: [160, 120, 80], number: 5 }],
    
    [{ coords: [125, 20, 50], number: 1 }, { coords: [105, 370, 60], number: 2 }, { coords: [240, 180, 80], number: 3 }, { coords: [5, 315, 60], number: 4 }, { coords: [320, 140, 50], number: 5 }],

    [{ coords: [135, 130, 50], number: 1 }, { coords: [335, 315, 50], number: 2 }, { coords: [15, 280, 50], number: 3 }, { coords: [310, 200, 50], number: 4 }, { coords: [210, 210, 50], number: 5 }],

    [{ coords: [280, 97, 50], number: 1 }, { coords: [70, 190, 50], number: 2 }, { coords: [110, 350, 50], number: 3 }, { coords: [90, 25, 50], number: 4 }, { coords: [330, 280, 80], number: 5 }],
    
    [{ coords: [10, 100, 50], number: 1 },{ coords: [30, 180, 50], number: 2 },{ coords: [250, 200, 50], number: 3 },{ coords: [100, 147, 50], number: 4 },{ coords: [320, 300, 50], number: 5 },{ coords: [310, 130, 50], number: 6 },{ coords: [330,20, 50], number: 7 }],

    [{ coords: [190, 385, 50], number: 1 } ,{ coords: [390, 350, 50], number: 2 } , { coords: [25, 65, 60], number: 3 }, { coords: [390, 5, 50], number: 4 }, { coords: [190, 200, 50], number: 5 }, { coords: [75, 180, 50], number: 6 },{ coords: [235, 25, 50], number: 7 } ] ,

    [{ coords: [220, 70, 50], number: 1 }, { coords: [90, 325, 50], number: 2 }, { coords: [350, 350, 50], number: 3 }, { coords: [300, 260, 50], number: 4 }, { coords: [80, 190, 50], number: 5 }, { coords: [140, 200 , 50], number: 6 } , { coords: [150, 240, 50], number: 7 }],

    [{ coords: [72, 10, 50], number: 1 }, { coords: [72, 140, 50], number: 2 }, { coords: [222, 207, 50], number: 3 },{ coords: [340, 220, 50], number: 4 }, { coords: [407, 320, 50], number: 5 }, { coords: [460, 390, 50], number: 6 }, { coords: [30, 320, 50], number: 7 }]
];

const images =[
    ["../../public/easy/easy1.1.jpg", "../../public/easy/easy1.2.jpg", 3], 
    ["../../public/easy/easy2.1.jpg", "../../public/easy/easy2.2.jpg", 3],
    ["../../public/easy/easy3.1.jpg", "../../public/easy/easy3.2.jpg", 3],
    ["../../public/medium/med1.1.jpg", "../../public/medium/med1.2.jpg", 5], 
    ["../../public/medium/med2.1.jpg", "../../public/medium/med2.2.jpg", 5],
    ["../../public/medium/med3.1.jpg", "../../public/medium/med3.2.jpg", 5], 
    ["../../public/medium/med4.1.jpg", "../../public/medium/med4.2.jpg", 5],
    ["../../public/hard/hard1.1.jpg","../../public/hard/hard1.2.jpg",7],
    ["../../public/hard/hard2.1.jpg","../../public/hard/hard2.2.jpg",7], 
    ["../../public/hard/hard3.1.jpg","../../public/hard/hard3.2.jpg",7], 
    ["../../public/hard/hard4.1.jpg","../../public/hard/hard4.2.png",7]
];

var count = images[i][2];
var clickcount = count*3;

window.onload = loadWindow()

function loadWindow(){

    //: Loading animation
	const svg1 = document.getElementById("svg1")
	svg1.innerHTML = `<svg class="bike" viewBox="0 0 48 30" width="48px" height="30px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><g transform="translate(9.5,19)"><circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549"/><g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562"><circle class="bike__spokes" r="5"/><circle class="bike__spokes" r="5" transform="rotate(180,0,0)"/></g></g><g transform="translate(24,19)"><g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)"><circle class="bike__pedals" r="4"/><circle class="bike__pedals" r="4" transform="rotate(180,0,0)"/></g></g><g transform="translate(38.5,19)"><circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549"/><g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562"><circle class="bike__spokes" r="5"/><circle class="bike__spokes" r="5" transform="rotate(180,0,0)"/></g></g><polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5"/><polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79"/><path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10"/><polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19"/></g></svg>`
	svg1.innerHTML += `<h1 class="text-3xl font-medium">Loading...</h1>`
	
	//: Manual loading for 1.5 sec
	setTimeout(loadGameScreen, 1500)

    function loadGameScreen(){
        //: Remove loading animation
		svg1.innerHTML = ""
        
        const clickedDifferences = new Set();

        const image1Div = document.getElementById("image1")
        const image2Div = document.getElementById("image2")
        const mapDiv = document.getElementById("map")
        const remainedMovesDiv = document.getElementById("remained-moves")
    
        const counterDisplay = document.createElement("div");
        counterDisplay.classList.add("counter-display");
        counterDisplay.innerHTML = "<p class='text-center'>Differences Remaining: <span class='font-semibold'>" + count + "</span></p><p class='text-center'>Clicks Remaining : <span class='font-semibold'>"+ clickcount + "</span></p>"
    
        const image1 = document.createElement("img");
        image1.src = images[i][0];
        image1.alt = "Image 1";
        image1.useMap = "#image-map";
        image1.classList.add("relative", "border", "border-solid", "border-2", "border-gray-500", "rounded")
        image1.id = "image1";
    
        const image2 = document.createElement("img");
        image2.src = images[i][1];
        image2.alt = "Image 2";
        image2.useMap = "#image-map";
        image2.classList.add("relative", "border", "border-solid", "border-2", "border-gray-500", "rounded")
        image2.id = "image2";
    
        const imageMap = document.createElement("map");
        imageMap.name = "image-map";
        imageMap.id = "image-map";
    
        remainedMovesDiv.appendChild(counterDisplay)
        image1Div.appendChild(image1)
        image2Div.appendChild(image2)
        mapDiv.appendChild(imageMap)
    
        differences[i].forEach(diff => {
            const area = document.createElement("area");
            area.shape = "circle";
            area.coords = diff.coords.join(',');
            area.alt = `Difference ${diff.number}`;
            area.addEventListener("click", () => count = utils.markDifference(diff.number, differences, i, clickedDifferences, count, counterDisplay, clickcount));
            const imageMap = document.getElementById("image-map")
            imageMap.appendChild(area);
        });
    
        image1.addEventListener("click", imageClickHandler)
    
        image2.addEventListener("click", imageClickHandler)
    
        function imageClickHandler(event){
            //: These are debugging comments. Please don't remove it!!!
            // const image = document.getElementById("image1");
            // const imageRect = image.getBoundingClientRect();
            // const imageLeft = imageRect.left;
            // const imageTop = imageRect.top;
            // const x = event.pageX - imageLeft;
            // const y = event.pageY - imageTop;
            // console.log("CLICKED");
            // console.log(`Mouse Pointer Location: (${x}, ${y})`);
            clickcount = utils.updateclickcount(clickcount, counterDisplay, count)
            utils.addAudio("../../public/sounds/buzz-buzz-sound.mp3", 1500)
        }
    }

}