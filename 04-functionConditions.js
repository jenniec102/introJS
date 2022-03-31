// takes an argument and checks it through conditionals
function conditionals(num){
  if(num == 1){
    return("You chose a chocolate chip cookie");
  } else if(num == 2){
    return("You chose an oatmeal raisin cookie");
  } else if(num == 3){
    return("You chose a macadamia nut cookie");
  } else if(num == 4){
    return("You chose one of each cookie");
  } else {
    return("You chose not to take a cookie");
  }
}

//test
console.log(conditionals(1));
console.log(conditionals(2));
console.log(conditionals(3));
console.log(conditionals(4));
console.log(conditionals(10));
