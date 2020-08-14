let pos = 0;

// const move = () => {
//   pos += 1;
// };

// move()
// console.log(pos);

// const move = (byAmount) => {
//     pos += byAmount;
// }

// move(5)
// console.log(pos)

const move = (pos, byAmount) => {
  const newPos = (pos += byAmount);
  return newPos;
};

let finalPos = move(0, 2);
console.log(finalPos);
