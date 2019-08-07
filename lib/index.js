"use strict";

module.exports = function babelOffConsole(babel) {
  return {
    visitor: {
      CallExpression: function CallExpression(path) {
        if (process.env.NODE_ENV.toLowerCase() !== 'production') return;
        var node = path.node;
        var callee = node.callee;
        var object = callee.object;

        if (node.type === 'CallExpression' && object.type === 'Identifier' && object.name === 'console') {
          path.remove();
        }
      }
    }
  };
};