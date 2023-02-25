// JavaScript 30
// Wes Bos
// https://javascript30.com/
// 16/02/2023 Tony Perez
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;  // key not associated to a sound
  audio.currentTime = 0;  // rewind to the start (stop playing, in case it is)
  audio.play();
  // animation
  key.classList.add('playing'); 
}

function removeTransition(e) {
  // several events happen when pressing-depressing the keys
  if (e.propertyName !== 'transform') return;  // skip it if it's not transform
  console.log('removeTransition');
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
