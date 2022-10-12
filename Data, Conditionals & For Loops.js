// let statements
let a = 0;
let b = 1;

// the first two numbers of the fibonnaci sequence
console.log(0);
console.log(1);

// for loop for remaining numbers
for (let i = 0; i < 38; i++){
  c = a + b;
  a = b;
  b = c;
  console.log(c);
}
