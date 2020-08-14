let GameCharacter = {
  name: "Doug",
  pos: 2,
  health: 100,
  move: function (byAmount) {
    this.pos += byAmount;
  },
};

let name = GameCharacter.name;
console.log(name);
GameCharacter.health = 50;

GameCharacter.move(10);
console.log(GameCharacter.pos);
