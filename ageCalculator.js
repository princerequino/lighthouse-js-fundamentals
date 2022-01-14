function ageCalculator(name, year1, year2){
  let age = year2 - year1
  let answer = name + " is " + age + " years old.";
  return answer
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));