const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px'; 
}

// Regular
console.log('Some text');

// Interpolated
const name = 'Tony';
console.log(`My name is ${name}`)

// Styled
console.log('%c Styled text', 'font-size:50px; background:green');

// warning!
console.warn('This is a warning');

// Error :|
console.error('This is an error');

// Info
console.info('This is an info');

// Testing
let p = document.querySelector('p');
console.log(p);
console.assert(p.classList.contains('ouch'), 'That is wrong');

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`Dog name: ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);

  console.groupCollapsed(`${dog.name}`);
  console.log(`Dog name: ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);

})
// counting
console.count('Tony');
console.count('Tony');
console.count('Ana');
console.count('Tony');
console.count('Ana');
console.count('Ana');

// timing
console.time('fetch data from Github');
fetch('https://api.github.com/users/tonper19')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetch data from Github');
    console.log(data);
  });
