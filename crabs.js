const crabPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

crabPositions.sort((a, b) => a - b);

median = crabPositions[crabPositions.length / 2];

const fuelCost = crabPositions.reduce((total, position) => {
  total += Math.abs(position - median);

  return total;
}, 0);

console.log(fuelCost);
