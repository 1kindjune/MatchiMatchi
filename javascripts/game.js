//Main Game
function numClick(){

	initialize(); // Initiate global variables for storage

	// Hide form
	document.getElementById("startForm").style.display = 'none';

	symbolNum = document.getElementById('symbols').value; //global var
	symbolNum = Math.min(8, symbolNum); //adjust to 8 max
	if(symbolNum <= 0){
		symbolNum = 1;
	}

	var gameDiv = createElement("div", {id: "gameBoard"}, "");
    document.getElementById("startForm").parentNode.insertBefore(gameDiv, document.getElementById("startForm").nextSibling);

    var boxNum = symbolNum * 2;
    var rowNum = Math.ceil(Math.sqrt(boxNum));

    var allSymbolList = ['❤', '★', '♫', '☀', '⚛', '✪', '☾', '♕'];
    symbolList = [];

    for(var z = 0; z < (symbolNum * 2); z++ ){
    	symbolList.push(allSymbolList[Math.floor(z/2)]);
    }
    symbolList = randomize(symbolList); //shuffled
    //make sure the symbols come out

    var boxW = (300/(rowNum + 1));
    var spaceW = boxW/(rowNum * 2);
    y = 0;
    while(y < boxNum){
		var boxStyle = "height: " + boxW + "px; width: " + boxW + "px; font-size: " + (boxW - 10) + "px; line-height: " + boxW + "px";
		var gameStyle = "height: " + boxW + "px; width: " + boxW + "px; margin: " + spaceW + "px";

		var boxSymbol = createElement("div", {id: "textCard" + y, class: "textCard hideCard", style: boxStyle}, symbolList[y]);
		var gameCard = createElement("div", {id: "gameCard" + y, class: "gameCard", style: gameStyle}, "", boxSymbol);

		gameDiv.appendChild(gameCard); //add card

		boxSymbol.cardID = y; 
		gameCard.cardID = y;
		gameCard.addEventListener("click", whenClick);

		if((y + 1) % rowNum == 0){
			gameDiv.appendChild(createElement("br", null, "", null));
		}
		y++;
	}
    document.getElementById("game").parentNode.insertBefore(createElement("div", {class: "someText"}, "# of Guesses: ", createElement("span", {id: "counter"}, "0", null)), document.getElementById("game").nextSibling);
    //find a shorter way to do this
}
function initialize(){
	chistory = []; //global var
	match = 0;  //global var
	numGuess = 0; //global var
}

function randomize(arr){
	var curr = arr.length, tempVal, randomNum;
	while(curr !== 0){
		randomNum = Math.floor(Math.random() * curr);
		curr -= 1;
		tempVal = arr[curr];
		arr[curr] = arr[randomNum];
		arr[randomNum] = tempVal;
	}
	return arr;
}

function createElement(tagName, attrib, text, inner) {
	var e = document.createElement(tagName);
	for (var x in attrib){
		if(attrib.hasOwnProperty(x)){
			e.setAttribute(x, attrib[x]);
		}
	}
	e.innerHTML = text;
	if(inner){
		e.appendChild(inner);
	}
	return e;
}

function showCard(a) {
	document.getElementById('textCard' + a).setAttribute('class', 'textCard');
}
function hideCard(b) {
	document.getElementById('textCard' + b).setAttribute('class', 'textCard hideCard');
}
function hideAll(x, y) {
	hideCard(x);
	hideCard(y);
}
//add double click and timeout 
function whenClick(x){
	a = x.target.cardID;

	chistory.push(a);
	showCard(a);
	if (chistory.length == 2){
		if(symbolList[chistory[0]] !== symbolList[chistory[1]]) { //timed
			window.setTimeout(hideAll.bind(null, chistory[0], chistory[1], 500));
		} 
		else{//they match!!!
			match++;
			document.getElementById("gameCard" + chistory[0]).removeEventListener("click", whenClick);
			document.getElementById("gameCard" + chistory[1]).removeEventListener("click", whenClick);
			if(match == symbolNum){ //check if you win?, try to pause?w
				document.getElementById("gameBoard").innerHTML = "<div class = 'win'>Winner!!!</div>";
			}
		}
		chistory = [];
		numGuess++
		document.getElementById("counter").innerHTML = numGuess;
	}
}



