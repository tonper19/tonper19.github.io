const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(event) {
  // was the shift key down when doing a check?
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        if (inBetween) {
          console.log('Starting inBetwen');
        } else {
          console.log('Ending in Between');
        }
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));