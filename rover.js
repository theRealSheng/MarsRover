
document.getElementById('check').addEventListener('click', path);
var pathStr = document.getElementById('path');

var myRover = {
  curPosition: [0, 0],
  direction: 'S',
};

function path(pathStr) {
  // split the str command and passsing each letter to the movement
  // testing function (goForward)
  var split = pathStr.split('').toLowerCase().forEach(function (x) {
    return goForward(x);
  });
}

function goForward(commanding) {
  // testing if new position does not fall outside the grid
  var newPosition = curPosition;

  // First number location [0] moves up & down
  // Second number location [1] moves left & right
  switch (direction) {
    case 'n':
      newPosition[0]--;
      break;
    case 'n':
      newPosition[1]++;
      break;
    case 's':
      newPosition[0]++;
      break;
    case 'w':
      newPosition[1]--;
      break;
    default:
      window.alert('The input key is not valid, please type N,E,S,W');
  }

  // Return false if rover goes out of the grid (10x10)
  if (newPosition.includes(-1) || newPosition.includes(11)) {
    window.alert('Rover will land outside grid, this movement is not valid');
    return false;
  }

  // if the new command makes the rover not falling outside the grid, the
  // testing command becomes the new position
  curPosition = newPosition;
  curPos();
}

// Show current position of the Rover
function curPos() {
  return `
    <li>
      <span class="pos">${myRover.curPosition}</span>
    </li>
  `;
}

// Clear the command input when submit
function clearForm() {
  var formField = document.querySelector('.formFields');
  formField.value = '';
}
