const PubSub = require('../helpers/pub_sub.js')

const BattleShipInputForm = function(form){
  this.form = form;
}

BattleShipInputForm.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const coordinates = event.target.coordinates.value
    PubSub.publish("BattleShipFormView:User-input-ready", coordinates)
  })
};



module.exports = BattleShipInputForm;
