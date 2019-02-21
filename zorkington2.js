const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let playerState = {
    currentRoom : "",
    roomDescription : {
        "182 Main St.":"182 Main St.\nYou are standing on Main Street between Church and South Winooski.\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.",
        "182 Main St. - Foyer": "",
        "Church and Main": "",
        "Riley's Apartment": "",
        "East":""
      },
    playerStatus : "",
    roomConnections : {
      "182 Main St.":["182 Main St. - Foyer", "Church and Main", "East"],
      "182 Main St. - Foyer":["182 Main St.", "BCA Classroom"],
      "Church and Main": ["182 Main St.", "Riley's Apartment"],
      "Riley's Apartment": ["Church and Main"],
      "East":["182 Main St."]
      },
    roomInventory : {
      
    },
    playerInventory : []
}


// welcome to the room

// hint: give room description and connections

function enter() {
  console.log(playerState.roomDescription.currentRoom)
  let userInput = await ask(">_")
  if 
}




function playerReady () {
  console.log("Before we start, let's make sure you understand the rules.\n 1) You control your character using verbs.\n 2) I can't answer any questions.\n 3) Don't use any punctuation in your commands.\n 4) Please type in all lowercase letters.\nThose are the only rules.")
  let understandRules = await ask("Do you understand the rules?\n>_")
  if (understandRules.toString().trim().toLowerCase() == "yes"){
      mainStreet1();
  } else {
      console.log("Ok, let's start over.")
      askToPlay();
  }
}

