const finalPosition = function (moves) {
  let final = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i <= moves.length; i++){
    switch (moves[i]){
    case 'north':
      x += 1;
      break;
    case 'east':
      y += 1;
      break;
    case 'west':
      y -= 1;
      break;
    case 'south':
      x -= 1;
      break;
    }
  }
  final.push(y);
  final.push(x);
  return final;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);