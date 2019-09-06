// 5 sets of 5 cards: MMSTE
// 5 sets of 3 cards: MSE
// 5 sets of 3 cards: MTE

var Mdeck = [];
var Sdeck = [];
var Tdeck = [];
var Edeck = [];

document.getElementById("monstercount").innerHTML = Mdeck.length;
document.getElementById("spellcount").innerHTML = Sdeck.length;
document.getElementById("trapcount").innerHTML = Tdeck.length;
document.getElementById("extracount").innerHTML = Edeck.length;

var sequence = [];
var category;
generateSequence();
iterateSequence();

$("#first").click(function(){
		if (sequence.length !== 0){
			var selected = document.getElementById("choice1").innerHTML;
			addtodeck(sequence, category, true);
		}
	});

	$("#second").click(function(){
		if (sequence.length !== 0){
			var selected = document.getElementById("choice2").innerHTML;
			addtodeck(sequence, category, false);
		}
	});

function generateSequence(){
	for (var i = 0; i < 5; i++){
		sequence.push("MMSTE");
		sequence.push("MSE");
		sequence.push("MTE");
	}

	shuffleSequence(sequence);
}

function shuffleSequence(sequence){
	for (var i = sequence.length -1; i > 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var temp = sequence[i];
		sequence[i] = sequence[j];
		sequence[j] = temp;
	}
}

function iterateSequence(){
	if (sequence.length != 0){
		category = sequence[0].toString();
		setChoices();
	}
	// console.log(sequence);
}

function setChoices(){
	document.getElementById("set1slot1").innerHTML = "";
	document.getElementById("set1slot2").innerHTML = "";
	document.getElementById("set1slot3").innerHTML = "";
	document.getElementById("set1slot4").innerHTML = "";
	document.getElementById("set1slot5").innerHTML = "";
	document.getElementById("set2slot1").innerHTML = "";
	document.getElementById("set2slot2").innerHTML = "";
	document.getElementById("set2slot3").innerHTML = "";
	document.getElementById("set2slot4").innerHTML = "";
	document.getElementById("set2slot5").innerHTML = "";
	document.getElementById("set1slot1").style = "background-color:white";
	document.getElementById("set1slot2").style = "background-color:white";
	document.getElementById("set1slot3").style = "background-color:white";
	document.getElementById("set1slot4").style = "background-color:white";
	document.getElementById("set1slot5").style = "background-color:white";
	document.getElementById("set2slot1").style = "background-color:white";
	document.getElementById("set2slot2").style = "background-color:white";
	document.getElementById("set2slot3").style = "background-color:white";
	document.getElementById("set2slot4").style = "background-color:white";
	document.getElementById("set2slot5").style = "background-color:white";

	document.getElementById("set1slot1").innerHTML = rollCard("Monster");
	document.getElementById("set2slot1").innerHTML = rollCard("Monster");
	document.getElementById("set1slot1").style = "background-color:peru";
	document.getElementById("set2slot1").style = "background-color:peru";

	if (category == "MMSTE"){
		document.getElementById("set1slot2").innerHTML = rollCard("Monster");
		document.getElementById("set2slot2").innerHTML = rollCard("Monster");
		document.getElementById("set1slot3").innerHTML = rollCard("Spell");
		document.getElementById("set2slot3").innerHTML = rollCard("Spell");
		document.getElementById("set1slot4").innerHTML = rollCard("Trap");
		document.getElementById("set2slot4").innerHTML = rollCard("Trap");
		document.getElementById("set1slot5").innerHTML = rollCard("Extra");
		document.getElementById("set2slot5").innerHTML = rollCard("Extra");

		document.getElementById("set1slot2").style = "background-color:peru";
		document.getElementById("set2slot2").style = "background-color:peru";
		document.getElementById("set1slot3").style = "background-color:darkcyan";
		document.getElementById("set2slot3").style = "background-color:darkcyan";
		document.getElementById("set1slot4").style = "background-color:deeppink";
		document.getElementById("set2slot4").style = "background-color:deeppink";
		document.getElementById("set1slot5").style = "background-color:green";
		document.getElementById("set2slot5").style = "background-color:green";
	}
	else if (category == "MSE"){
		document.getElementById("set1slot2").innerHTML = rollCard("Spell");
		document.getElementById("set2slot2").innerHTML = rollCard("Spell");
		document.getElementById("set1slot3").innerHTML = rollCard("Extra");
		document.getElementById("set2slot3").innerHTML = rollCard("Extra");

		document.getElementById("set1slot2").style = "background-color:darkcyan";
		document.getElementById("set2slot2").style = "background-color:darkcyan";
		document.getElementById("set1slot3").style = "background-color:green";
		document.getElementById("set2slot3").style = "background-color:green";
	}
	else if (category == "MTE"){
		document.getElementById("set1slot2").innerHTML = rollCard("Trap");
		document.getElementById("set2slot2").innerHTML = rollCard("Trap");
		document.getElementById("set1slot3").innerHTML = rollCard("Extra");
		document.getElementById("set2slot3").innerHTML = rollCard("Extra");
		
		document.getElementById("set1slot2").style = "background-color:deeppink";
		document.getElementById("set2slot2").style = "background-color:deeppink";
		document.getElementById("set1slot3").style = "background-color:green";
		document.getElementById("set2slot3").style = "background-color:green";
	}
}

function addtodeck(sequence, category, choice){
	if (choice == true){
		var card1 = document.getElementById("set1slot1").innerHTML;
		var card2 = document.getElementById("set1slot2").innerHTML;
		var card3 = document.getElementById("set1slot3").innerHTML;
		if (category == "MMSTE"){
			var card4 = document.getElementById("set1slot4").innerHTML;
			var card5 = document.getElementById("set1slot5").innerHTML;
		}

	}
	else if (choice == false){
		var card1 = document.getElementById("set2slot1").innerHTML;
		var card2 = document.getElementById("set2slot2").innerHTML;
		var card3 = document.getElementById("set2slot3").innerHTML;
		if (category == "MMSTE"){
			var card4 = document.getElementById("set2slot4").innerHTML;
			var card5 = document.getElementById("set2slot5").innerHTML;
		}

	}
	if (category =="MMSTE"){
		Mdeck.push(card1);
		Mdeck.push(card2);
		Sdeck.push(card3);
		Tdeck.push(card4);
		Edeck.push(card5);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
		document.getElementById("spelllist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card3 + "<br />";
		document.getElementById("traplist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card4 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card5 + "<br />";
	}

	if (category =="MSE"){
		Mdeck.push(card1);
		Sdeck.push(card2);
		Edeck.push(card3);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("spelllist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card3 + "<br />";
	}

	if (category =="MTE"){
		Mdeck.push(card1);
		Tdeck.push(card2);
		Edeck.push(card3);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("traplist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card3 + "<br />";


	}
	// updates the card type counts in your deck
	document.getElementById("monstercount").innerHTML = (Mdeck.length);
	document.getElementById("spellcount").innerHTML = (Sdeck.length);
	document.getElementById("trapcount").innerHTML = (Tdeck.length);
	document.getElementById("extracount").innerHTML = (Edeck.length);
	sequence.shift();

	if (sequence.length == 0){
		document.getElementById("choice1").innerHTML = "Scroll down to the bottom for your deck data.";
		removeElement("choice1");
		removeElement("choice2");
		removeElement("first");
		removeElement("second");
		document.getElementById("cardIdButton").innerHTML = "<button type='button' onclick = 'generateYDK()'>Click to generate ydk file</button>";
	}
	else if (sequence.length != 0){
		// moves to the next choice
		iterateSequence(sequence);
	}
}

function rollCard(type){
	var list;
	if (type == "Monster"){
		list = monsterList;
	}
	else if (type == "Spell"){
		list = spellList;
	}
	else if (type == "Trap"){
		list = trapList;
	}
	else if (type == "Extra"){	
		list = extraList;
	}
	// randomly picks an index from the picked card type list
	var randIndex = Math.floor(Math.random() * list.length);
	if (randIndex < 0){
		randIndex = 0;
	}
	var rolledCard = list[randIndex];
	// prevents cards from appearing more than once
	if (randIndex >= 0){
		if (type == "Monster"){
			monsterList.splice(randIndex, 1);
		}
		else if (type == "Spell"){
			list = spellList;
			spellList.splice(randIndex, 1);
		}
		else if (type == "Trap"){
			list = trapList;
			trapList.splice(randIndex, 1);
		}
		else if (type == "Extra"){
			extraList.splice(randIndex, 1);
		
		}
	}
	return rolledCard.name;
} 

// generates the deck file and instructions how to use them
function generateYDK(){
	document.getElementById("ydkInstructions").innerHTML = "Open Notepad and copy everything below from the red section into a new file and save it as '[PutNameHere].ydk' under your deck folder of YGOPRO." + "<br />";
	// document.getElementById("ydkInstructions").innerHTML += "<button onclick = 'ydkClipboard()'> Click to copy ydk to clipboard.</button>"
	var ydkContent = "#created by ..." + "<br />";
	ydkContent += "#main" + "<br />";
	// adds in card IDs for main deck monsters
	for (x = 0; x < Mdeck.length; x++){
		for (i = 0; i < cardList.length; i++){
			if (Mdeck[x] == cardList[i].name){
				ydkContent += cardList[i].cardNum + "<br />";
			}

		}
	}
	// adds in card IDs for spells
	for (x = 0; x < Sdeck.length; x++){
		for (i = 0; i < cardList.length; i++){
			if (Sdeck[x] == cardList[i].name){
				ydkContent += cardList[i].cardNum + "<br />";
			}

		}
	}
	// adds in card IDs for traps
	for (x = 0; x < Tdeck.length; x++){
		for (i = 0; i < cardList.length; i++){
			if (Tdeck[x] == cardList[i].name){
				ydkContent += cardList[i].cardNum + "<br />";
			}

		}
	}
	// marks the ydk point for extra deck monsters
	ydkContent += "#extra" + "<br />";
	// adds in card IDs for extra deck monsters
	for (x = 0; x < Edeck.length; x++){
		for (i = 0; i < cardList.length; i++){
			if (Edeck[x] == cardList[i].name){
				ydkContent += cardList[i].cardNum + "<br />";
			}

		}
	}
// adds the generated ydk content to the page
	document.getElementById("ydkSection").innerHTML = ydkContent;
	}

// WIP function to make a clipboard button
function ydkClipboard() {
  /* Get the text field */
  var copyText = document.querySelector("ydkSection");
  copyText.select();
  document.execCommand("copy");
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}