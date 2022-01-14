const chooseStations = function(stations) {
  let open = [];
  for (const places of stations){
    if (places[1] >= 20 && (places[2] === 'school' || places[2] === 'community centre')){
      open.push(places[0]);
    }
  }
  return open;
}