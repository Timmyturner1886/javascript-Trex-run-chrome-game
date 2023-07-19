document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    let isJumping = false; // Declare and initialize isJumping variable
  
    function control(e) {
      if (e.keyCode === 32) {
        if (!isJumping) {
          isJumping = true;
          jump();
        }
        console.log('pressed');
      }
    }
  
    document.addEventListener('keyup', control);
  
    // make dino jump
    function jump() {
      let position = 0;
      let timerId = setInterval(function () {
        // downward
        if (position === 150) {
          clearInterval(timerId);
          console.log('down');
  
          let downTimerId = setInterval(function () {
            if (position === 0) {
              clearInterval(downTimerId);
              isJumping = false; // Reset isJumping after the jump is complete
              console.log('up');
            }
            position -= 30;
            dino.style.bottom = position + 'px';
          }, 20);
        }
  
        // upward
        console.log('up');
        position += 30;
        dino.style.bottom = position + 'px';
      }, 20);
    }
  });
  