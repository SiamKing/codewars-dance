function findChildren(dancingBrigade){
  let dancers = dancingBrigade.split('').sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
      }
  })

  let moms = dancers.filter(v => v <= 'Z');
  let kids = dancers.filter(v => v >= 'a');
  let sortedDancers = '';

  moms.forEach(mom => {
    sortedDancers += mom;
    for (let i = 0; i < kids.length; i++) {
        if (kids[i] === mom.toLowerCase()) {
          sortedDancers += kids[i];
        }
    }
  })
  return sortedDancers;
}
