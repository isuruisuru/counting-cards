let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count+=0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if (count===0) {
    return "0 Hold";
  }
  else if (count===5) {
    return "5 Bet";
  }
  else if (count===-5) {
    return "-5 Hold";
  }
  else if (count===-1) {
    return "-1 Hold";
  }
  else if (count===1) {
    return "1 Bet";
  }

  return "Change Me";
  // Only change code above this line
}

cc(2); 
cc(3); 
cc(7); 
cc('K'); 
cc('A');