const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
for (let u = 0; u < ingredients.length; u++){
  console.log(ingredients[u])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let x = ingredients.length - 1; x > -1; x--){
  console.log(ingredients[x]);
}