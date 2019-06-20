const graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4, E: 8 },
  D: { B: 1, C: 4, E: 3, F: 6 },
  E: { C: 8, D: 3 },
  F: { D: 6 }
};
