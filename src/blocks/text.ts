/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  type: 'add_text',
  message0: 'Add text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: '',
  helpUrl: '',
};

const cont = {
  "type": "cont",
  "tooltip": "Container holding some value",
  "helpUrl": "",
  "message0": "agent %1 quantity %2 entity %3",
  "args0": [
    {
      "type": "input_value",
      "name": "agent",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "quantity",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "entity",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true

};

const compare = {
  "type": "compare",
  "tooltip": "compare between two containers",
  "helpUrl": "",
  "message0": "agentA %1 agentB %2 quantity %3 entity %4",
  "args0": [
    {
      "type": "input_value",
      "name": "agentA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "agentB",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "quantity",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "entity"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true
}

const compareRatio = {
  "type": "compareRatio",
  "tooltip": "ratio between two containers",
  "helpUrl": "",
  "message0": "agentA %1 agentB %2 ratio %3",
  "args0": [
    {
      "type": "input_value",
      "name": "agentA",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "agentB",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "ratio",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true
}

const rate = {
  "type": "rate",
  "tooltip": "rate",
  "helpUrl": "",
  "message0": "agent %1 quantity %2 entity %3 entityBase %4",
  "args0": [
    {
      "type": "input_value",
      "name": "agent",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "quantity",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "entity",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "entityBase",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true
}

const ratios = {
  "type": "ratios",
  "tooltip": "ratios",
  "helpUrl": "",
  "message0": "whole %1 parts %2 ratios %3",
  "args0": [
    {
      "type": "input_value",
      "name": "whole",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "parts",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "ratios",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true
}

const inference = {

  "type": "inference",
  "tooltip": "",
  "helpUrl": "",
  "message0": "inference rule %1",
  "args0": [
    {
      "type": "input_value",
      "name": "premises",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 225,
}

const nthPart = {
  "type": "nthPart",
  "tooltip": "nth agent",
  "helpUrl": "",
  "message0": "agent %1",
  "args0": [
    {
      "type": "input_value",
      "name": "agent"
    }
  ],
  "output": null,
  "colour": 225
}

const sum = {
  "type": "sum",
  "tooltip": "sum",
  "helpUrl": "",
  "message0": "wholeAgent %1 partAgents %2 wholeEntity %3 partEntity %4",
  "args0": [
    {
      "type": "input_value",
      "name": "wholeAgent",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "partAgents",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "wholeEntity",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "partEntity",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true
}

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  addText,
  cont,
  compare,
  compareRatio,
  rate,
  ratios,
  nthPart,
  sum,
  inference,
]);


