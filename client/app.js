const BattleShipForm = require('./src/views/battleship_form_view.js');
const BattleShipNewGame = require('./src/models/new_game.js');



document.addEventListener('DOMContentLoaded', () => {

  const userInput = document.querySelector("#forminput")
  const battleShipForm = new BattleShipForm(userInput)
  battleShipForm.bindEvents()


  const battleShipNewGame = new BattleShipNewGame ()
  battleShipNewGame.bindEvents()
  battleShipNewGame.newGameToBePlayed()

})
