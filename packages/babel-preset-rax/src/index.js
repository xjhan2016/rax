import resolvePlugins from './resolvePlugins';

module.exports = {
  plugins: resolvePlugins([
    'transform-react-display-name',
    ['transform-react-jsx', {
      pragma: 'createElement' // default pragma is React.createElement
    }],
    'transform-flow-strip-types',
    'transform-export-extensions', // stage-1
    'transform-decorators-legacy', // should before transform-class-properties
    'transform-class-properties',
    'transform-object-rest-spread', // stage-3
    'syntax-trailing-function-commas', // stage-3
    'syntax-flow',
    'syntax-jsx',
    'minify-dead-code-elimination'
  ]),
  env: {
    development: {
      plugins: resolvePlugins([
        'transform-react-jsx-source',
      ])
    },
    production: {
      plugins: resolvePlugins([
        'transform-react-constant-elements'
      ])
    },
  }
};
