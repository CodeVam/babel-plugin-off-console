module.exports = function babelOffConsole(babel) {
  return {
    visitor: {
      CallExpression(path) {
        if (process.env.NODE_ENV.toLowerCase() !== 'production') return;
        const node = path.node;
        const callee = node.callee;
        const { object } = callee;
        if (node.type === 'CallExpression' && object.type === 'Identifier' && object.name === 'console') {
          path.remove();
        }
      }
    }
  }
}