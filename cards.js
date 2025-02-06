// Shuffle Deck of Cards
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
const values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];
let deck = [];
// for (let suit of suits) {
//   for (let value of values) {
//     deck.push({ value, suit });
//   }
// }
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { value: values[x], suit: suits[i] };
    deck.push(card);
  }
}
const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};
shuffleDeck(deck);
// console.log(shuffleDeck(deck));

// display 5 results
for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].value} of ${deck[i].suit}`);
}
