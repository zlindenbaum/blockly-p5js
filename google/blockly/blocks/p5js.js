'use strict';

goog.provide('Blockly.Blocks.p5js');

goog.require('Blockly.Blocks');

Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw");
    this.appendStatementInput("drawn")
        .setCheck(null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
