const Combinatorics = require("js-combinatorics");

const group = ["Penelope", "Brad", "Ivan"];

const cmb = Combinatorics.combination(group, 2);

const pairings = cmb.reduce((acc, pair) => `${acc}${pair[0]} ${pair[1]}, `, "");

console.log(pairings);
