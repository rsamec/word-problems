/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from 'blockly/javascript';
import * as Blockly from 'blockly/core';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = JSON.stringify(text);
  outputDiv.appendChild(textEl);
}`,
  );
  // Generate the function call for this block.
  const code = `${addText}(${text});\n`;
  return code;
};



forBlock['cont'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_agent = generator.valueToCode(block, 'agent', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_quantity = generator.valueToCode(block, 'quantity', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_entity = generator.valueToCode(block, 'entity', Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = `createCont([${value_agent},${value_quantity}, ${value_entity}])`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}

forBlock['compare'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_agenta = generator.valueToCode(block, 'agentA', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_agentb = generator.valueToCode(block, 'agentB', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_quantity = generator.valueToCode(block, 'quantity', Order.ATOMIC);
 
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_entity = generator.valueToCode(block, 'entity', Order.ATOMIC);

  
  const code = `createComp([${value_agenta},${value_agentb},${value_quantity}, ${value_entity}])`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}

forBlock['compareRatio'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_agenta = generator.valueToCode(block, 'agentA', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_agentb = generator.valueToCode(block, 'agentB', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_ratio = generator.valueToCode(block, 'ratio', Order.ATOMIC);
 
  
  const code = `createCompRatio([${value_agenta},${value_agentb},${value_ratio}])`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}

forBlock['rate'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_agent = generator.valueToCode(block, 'agent', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_quantity = generator.valueToCode(block, 'quantity', Order.ATOMIC);
 
  
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_entity = generator.valueToCode(block, 'entity', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_entityBase = generator.valueToCode(block, 'entityBase', Order.ATOMIC);

  
  const code = `createRate([${value_agent},${value_quantity},${value_entity}, ${value_entityBase}])`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}


forBlock['ratios'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_whole = generator.valueToCode(block, 'whole', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_parts = generator.valueToCode(block, 'parts', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_ratios = generator.valueToCode(block, 'ratios', Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = `createRatios([${value_whole},${value_parts},${value_ratios}])`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}

forBlock['nthPart'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
){
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_agent = generator.valueToCode(block, 'agent', Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = `createNthPart(${value_agent})`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}

forBlock['sum'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
){
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_wholeagent = generator.valueToCode(block, 'wholeAgent', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_partagents = generator.valueToCode(block, 'partAgents', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_wholeentity = generator.valueToCode(block, 'wholeEntity', Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_partentity = generator.valueToCode(block, 'partEntity', Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = `createSum([${value_wholeagent},${value_partagents},${value_wholeentity}, ${value_partentity}])`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}

forBlock['inference'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const value_premises = generator.valueToCode(block, 'premises', Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = `inferenceRule(${value_premises})`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
}