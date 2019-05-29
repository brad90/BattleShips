const PubSub = require('../helpers/pub_sub.js')

const Overlay = function(container){
  this.container = container
}


// Overlay.prototype.bindEvents = function () {
//   this.renderOverlayOpen()
//   this.renderOverlayClose()
// };

// Overlay.prototype.renderOverlayOpen = function () {
//   PubSub.subscribe('')
//   createOverlay.classList.add('opening-page');
//
//
// };


module.exports = Overlay;
