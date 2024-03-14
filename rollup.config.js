const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')

const path = require('path')
const nodeResolve = require('@rollup/plugin-node-resolve')

const resolve = function (...args) {
  return path.resolve(__dirname, ...args)
}

const extensions = ['.js', '.ts']
module.exports = {
  input: {
    index: resolve('./src/index.ts')
  },
  output: [
    {
      dir: 'dist/umd',
      name: 'dayUtils',
      format: 'umd',
      globals: {
        dayjs: 'dayUtils'
      }
    },
    {
      dir: 'dist/cjs',
      format: 'cjs'
    },
    {
      dir: 'dist/es',
      format: 'es'
    }
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    babel({
      exclude: 'node_modules/**',
      extensions
    }),
    terser()
  ]
}
