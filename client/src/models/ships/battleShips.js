const  BattleShip = function(type, hitpoints){
  this.type = type
  this.hitPoints = hitpoints,
  this.coordinates = []
}


const battleShip = new BattleShip



BattleShip.prototype.succesfulHitToShip = function () {

  if (this.hitPoints > 1 ){
     return this.hitPoints -= 1
   }
  console.log("you sunk my battleship")
};









module.exports = BattleShip;
