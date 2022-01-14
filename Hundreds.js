function howManyHundreds(num){
  if (num < 100){
    return 0
  } else {
    let answer = Math.floor(num / 100)
    return answer
  }
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));