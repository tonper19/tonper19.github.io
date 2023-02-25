const inputs = document.querySelectorAll('.controls input');
    
function handleUpdate() {
  //console.log(this.value);
  //console.log(this.dataset);

  // if (data-) sizing is defined, otherwise nothing '' for base color
  const suffix = this.dataset.sizing || ''; 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);  
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
