// dependencies
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const renderComponents = require('reshape-preact-components')

// so we can use jsx
const preactBabel = require('babel-preset-preact')
const jsStd = jsStandards({ appendPresets: [preactBabel] })
require('babel-register')(jsStd)

// here's the actual component
const MyComponent = require('./assets/my-component')

// spike configuration
module.exports = {
  entry: { main: './assets/index' },
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    parser: false,
    appendPlugins: [renderComponents({ 'my-component': MyComponent })]
  }),
  postcss: cssStandards({ parser: false }),
  babel: jsStd
}
