window.onload = function () {
  const subButton = document.getElementById('check').value;
  const pathStr = document.getElementById('instructions').value;

  subButton.addEventListener('click', path);
  pathStr.addEventListener('click', clearForm);

  let myRover = {
    curPosition: [0, 0],
    direction: 'n',
  };

  // Array for the possible directions - To be use later to change direction with
  //l(left) or r(right)
  let dirChange = [n, e, s, w];

  function path(pathStr) {
    // split the str command and passsing each letter to the movement
    // testing function (goForward)
    let split = pathStr.split('').toLowerCase().forEach(x => goForward(x));
  }

  function goForward(letter) {
    // testing if new position does not fall outside the grid
    let newPosition = [0, 0];

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
      curPos();
    }
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
    let formField = document.querySelector('.formFields');
    formField.value = '';
  }
};
