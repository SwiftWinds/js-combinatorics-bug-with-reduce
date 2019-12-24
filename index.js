const Combinatorics = require("js-combinatorics");

const history = [
  [
    ["Penelope", "Jenny", "Stan", "Fredric"],
    ["Karen", "Ivan", "George", "Nathan"],
    ["Brad", "Alleson", "Tom", "Charlie"],
    ["Rachel", "Danielle", "Mona", "Laura"],
    ["Harriet", "Olive"]
  ]
];

const group = ["Penelope", "Brad", "Ivan"];

const cmb = Combinatorics.combination(group, 2);

const pairings = cmb.reduce((acc, pair) => `${acc}${pair[0]} ${pair[1]}, `, "");

console.log(pairings);
