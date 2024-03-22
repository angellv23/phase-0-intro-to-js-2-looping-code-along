function writeCards(cards) {
    let result = [];
    for (let i = 0; i < cards.length; i++) {
      result.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return result;
  }
  const names = ["Charlie", "Samip", "Ali"];
const occasion = "surprise";
const cards = writeCards(names);
console.log(cards);
function countDown() {
    let number = 10
while (number >= 0) {
    console.log(number--);
}
}

