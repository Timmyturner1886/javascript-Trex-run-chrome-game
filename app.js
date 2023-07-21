document.addEventListener('DOMContentLoaded', () => {
  const dino = document.querySelector('.dino');
  let isJumping = false; // Declare and initialize isJumping variable to keep track of whether the dino is already jumping or not.

  function control(e) {
    if (e.keyCode === 32) {
      if (!isJumping) { // Check if the dino is not already jumping to prevent multiple jumps in succession.
        isJumping = true; // Set isJumping to true to indicate that the dino is starting to jump.
        jump();
      }
      console.log('pressed'); // Log that the spacebar was pressed (for testing purposes).
    }
  }

  document.addEventListener('keyup', control); // Listen for the keyup event to detect when the spacebar is released.

  // Function to make the dino jump.
  function jump() {
    let position = 0;

    // Set up an interval to control the jump animation.
    let timerId = setInterval(function () {
      // downward
      if (position === 150) {
        clearInterval(timerId); // If the dino reaches the maximum jump height, clear the interval to stop the upward motion.
        console.log('down');

        // Set up another interval to control the downward motion after reaching the maximum height.
        let downTimerId = setInterval(function () {
          if (position === 0) {
            clearInterval(downTimerId); // If the dino returns to the ground, clear the interval to stop the downward motion.
            isJumping = false; // Reset isJumping after the jump is complete, allowing the dino to jump again.
            console.log('up');
          }
          position -= 30; // Move the dino upwards (negative value) to simulate the jump motion.
          dino.style.bottom = position + 'px'; // Update the dino's position.
        }, 20);
      }

      // upward
      console.log('up'); // Log that the dino is moving upward (for testing purposes).
      position += 30; // Move the dino upwards.
      dino.style.bottom = position + 'px'; // Update the dino's position.
    }, 20);
  }
});
