// Create a street fighter character class that makes fighting game chartacter with 4 properties and 3 methods
// 4 Properties: Name, Strength, Speed, Costume Color, Gender
// 3 Methods: Punch, Kick, Throw, Jump, Block

// Create class constructor to pump out game characters

class Player{
  constructor(name, costumeColor, strength, speed){
    this.name = name;
    this.costumeColor= costumeColor;
    this.strength = strength;
    this.speed = speed;
  }

  punchEnemy(){
    console.log('hadouken');
  }

  kickEnemy(){
    console.log('Kick!');
  }
  throwEnemy(){
    console.log('Throw!');
  }
  blockEnemy(){
    console.log('Block!');
  }
  jumpEnemy(){
    console.log('Jump!');
  }
}
// Use constructor to create game characters

let chunLi = new Player ('Chun Li', 'blue', '100', '100');
let ryu = new Player ('Ryu', 'white','80', '70')
chunLi.punchEnemy
