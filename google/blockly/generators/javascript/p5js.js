

'use strict';

goog.provide('Blockly.JavaScript.p5js');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['draw'] = function(block) {
  var statements_draw = Blockly.JavaScript.statementToCode(block, 'drawn');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function draw(){\n';
  for(statement in statements_draw){
    code.append(statement + '\n');
  }
  return code + '}\n';
};
