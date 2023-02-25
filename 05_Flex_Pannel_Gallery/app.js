// 16
const panels = document.querySelectorAll('.panel');  // nodeList (not an array)

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(event) {
  console.log(event.propertyName);
  // safari has a different properetyName, thus use include
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
  
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
