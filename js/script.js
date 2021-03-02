var result = 0;

for ( var i = 1; i <= 100; i++ ) {
  if ( i % 15 == 0 ) {
    result = "BuzzFizz";
  } else if ( i % 5 == 0 ) {
    result = "Buzz";
  } else if ( i % 3 == 0 ) {
    result = "Fizz";
  } else {
    result = i;
  }
  console.log(result);
}


// console.log(range[i]);
