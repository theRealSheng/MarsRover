const subButton = document.getElementById('check');
const pathStr = document.getElementById('instructions').value;
const currentPos = docuemnt.querySelector('.pos');

subButton.addEventListener('click', path.bind(pathStr));

pathStr.addEventListener('click', clearForm);

let myRover = {
  position: [0, 0],
  direction: 'n',
};

// Array for the possible directions - To be use later to change direction with
//l(left) or r(right)
let dirChange = ['n', 'e', 's', 'w'];

function path(pathStr) {
  // split the str command and passsing each letter to the movement
  // testing function (goForward)
  let split = pathStr.split('').toLowerCase();

  for (let i = 0; i < pathStr.length; i++) {
    return goForward(split[i]);
  }
}

function goForward(letter) {
  // testing if new position does not fall outside the grid
  let lastPos = [];
  let newPosition = [0, 0];

  if (!checkCollision) {
    if (letter === 'l') {
      myRover.direction = dirChange[dirChange.indexOf('myRover.direction') - 1];
    } else if ((dirChange.indexOf('myRover.direction') - 1) < 0) {
      myRover.direction = dirChange[dirChange.length - 1];
    }

    if (letter === 'r') {
      myRover.direction = dirChange[dirChange.indexOf('myRover.direction') + 1];
    } else if ((dirChange.indexOf('myRover.direction') + 2) > dirChange.length) {
      myRover.direction = dirChange[0];
    }

    if (direction === 'n') {
      return letter === 'f' ? newPosition[0]++ : newPosition[0]--;
    }

    if (direction === 's') {
      return letter === 'f' ? newPosition[0]-- : newPosition[0]++;
    }

    if (direction === 'w') {
      return letter === 'f' ? newPosition[1]-- : newPosition[1]++;
    }

    if (direction === 'e') {
      return letter === 'f' ? newPosition[1]++ : newPosition[1]--;
    }

    if (newPosition.includes(-1) || newPosition.includes(11)) {
      alert('The rover will fall out of the grid. Please reenter other instructions');
    } else {
      myRover.position = newPosition;
      lastPos.push(letter);
      curPos();
    }
  } else {
    //Code to show last Position
    curPos();
  }

  if (checkCollision) {
    return;
  }
}

// Show current position of the Rover
function curPos() {
  let currPos =
    `
    <li>
      <span class="pos">${myRover.curPosition}</span>
    </li>
  `;
  currentPos.innerHTML = currPos;
}

// Clear the command input when submit
function clearForm() {
  let formField = document.querySelector('.formFields');
  formField.value = '';
}

function checkCollision() {
  return newPosition === [4, 8] ? true : false;
}
