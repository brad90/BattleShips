const BattleShipForm = require('./src/views/battleship_form_view.js');
const BattleShipNewGame = require('./src/models/new_game.js');
const HitOrMiss = require('./src/views/battleship_hitOrNot_view.js');



document.addEventListener('DOMContentLoaded', () => {

  const userInput = document.querySelector("#forminput")
  const battleShipForm = new BattleShipForm(userInput)
  battleShipForm.bindEvents()

  const hitOrMiss = new HitOrMiss()
  hitOrMiss.bindEvents()


  const battleShipNewGame = new BattleShipNewGame ()
  battleShipNewGame.playerGuessInput()
  battleShipNewGame.bindEvents()
  battleShipNewGame.newGameToBePlayed()



})
