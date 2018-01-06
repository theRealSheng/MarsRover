let myRover = {
  position: [0, 0],
  direction: 'N',
  commands: ['l', 'r', 'f', 'b'],
};

// ************Variables list
var commandInput;
var count = 0;
var finalCommand;
var obsX = Math.round(Math.random() * 10);
var obsY = Math.round(Math.random() * 10);
var obstacles = [obsX, obsY];

var newDirectionStr = 'New Rover Direction: ';

// *************Starting program
var startInformation = console.log('Start position: ' + '[' + myRover.position + ']' + ' Direction: ' + myRover.direction);

var obstaclePos = console.log(`There is obstacle at ${obstacles}`);

//Asking for the orders (commands)
commandInput = prompt(`Waiting for new orders. There is an obstacle at position [${[obstacles]}]. The current direction of the Rover is North at position [0(X-point),0(Y-point)].
  The commands are:
  L: Left;
  R: Right;
  F: Forward;
  B: Backward;`).toLowerCase();

//Checking each individual command order
while (count < commandInput.length) {

  // Verifying if the commandInput is one of the roverCommands ("l", "r", "f", "b")

  if (commandInput[count] === myRover.commands[0]) {
    // register last command with the new instruction
    finalCommand = myRover.commands[0];

  } else if (commandInput[count] === myRover.commands[1]) {

    finalCommand = myRover.commands[1];

  } else if (commandInput[count] === myRover.commands[2]) {

    finalCommand = myRover.commands[2];

  } else if (commandInput[count] === myRover.commands[3]) {

    finalCommand = myRover.commands[3];

  } else {

    //Message of error ("You used a wrong command!")
    console.log(`Sorry, the letter ${commandInput[count]} isn't a correct command.The commands are:   L: Left;   R: Right;   F: Forward;   B: Backward;  Waiting for new orders`);
    break;
  }

  finalCommand = commandInput[count];

  //Functions to get direction ("N", "E", "S", "W")
  if (finalCommand === 'l' || finalCommand === 'r') {
    getDirection();
  }

  //Functions to move the Mars Rover
  if (finalCommand === 'f' || finalCommand === 'b') {
    moveRover();
  }

  //Inform the user about the Rover position in Mars

  if (commandInput[count] === 'f' || commandInput[count] === 'b') {
    console.log('New Rover Position: [' + myRover.position[0] + ', ' + myRover.position[1] + ']');
  }

  // Check if rover falls outside of the grid of 10 x 10
  if (fallOut()) {
    console.log('The rover will fall outside the grid. Please input new instructions');
    break;
  }

  if (hasCollided()) {
    console.log('The rover has crossed with the obstacle. Please input other instructions');
  }

  count++;

}

var countInverse = commandInput.length;

while (countInverse > -1) {

  if (countInverse === 0) {
    console.log('Current Rover Position: [' + myRover.position[0] + ', ' + myRover.position[1] + ']' + ' & Current Direction: ' + myRover.direction);
  }

  countInverse--;
}

//****************** End program

//******* Functions

//Changing the direction depending on the finalCommand
function getDirection() {

  if (finalCommand === 'l') {
    switch (myRover.direction) {
      case 'N':
        myRover.direction = 'W';
        console.log(newDirectionStr + myRover.direction);
        break;

      case 'W':
        myRover.direction = 'S';
        console.log(newDirectionStr + myRover.direction);
        break;

      case 'S':
        myRover.direction = 'E';
        console.log(newDirectionStr + myRover.direction);
        break;

      case 'E':
        myRover.direction = 'N';
        console.log(newDirectionStr + myRover.direction);
        break;
    }
  }

  if (finalCommand === 'r') {
    switch (myRover.direction) {
      case 'N':
        myRover.direction = 'E';
        console.log(newDirectionStr + myRover.direction);
        break;

      case 'E':
        myRover.direction = 'S';
        console.log(newDirectionStr + myRover.direction);
        break;

      case 'S':
        myRover.direction = 'W';
        console.log(newDirectionStr + myRover.direction);
        break;

      case 'W':
        myRover.direction = 'N';
        console.log(newDirectionStr + myRover.direction);
        break;
    }
  }

  return myRover.direction;
}

//Make the Rover move depending on: direction & if forward/backward
function moveRover() {

  if (finalCommand === 'f') {
    switch (myRover.direction) {
      case 'N':
        myRover.position[1]++;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[1]--;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
      case 'E':
        myRover.position[0]++;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[0]--;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
      case 'S':
        myRover.position[1]--;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[1]++;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
      case 'W':
        myRover.position[0]--;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[0]++;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
    }
  }

  if (finalCommand === 'b') {
    switch (myRover.direction) {
      case 'N':
        myRover.position[1]--;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[1]++;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
      case 'E':
        myRover.position[0]--;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[0]++;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
      case 'S':
        myRover.position[1]++;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[1]--;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
      case 'W':
        myRover.position[0]++;
        if (String(myRover.position) === String(obstacles)) {
          myRover.position[0]--;
          console.log('The rover has crossed with the obstacle. Please input other instructions');
        }

        break;
    }
  }

  return myRover.position;
}

//Stop Commands if rover falls our of the grid 10 x 10

function fallOut() {
  return Number(myRover.position[0]) < 0 || Number(myRover.position[1]) < 0 || Number(myRover.position[0]) > 9 || Number(myRover.position[1]) > 9 ? true : false;
}

function hasCollided() {
  return (String(myRover.position) === String(obstacles)) ? true : false;
}
