const { terser } = require('rollup-plugin-terser')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const path = require('path')

const resolve = (...args) => path.join(__dirname, ...args)

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  input: resolve('src/index.js'),
  output: isDev
    ? {
        file: resolve('source/js/index.js'),
        sourcemap: true,
        format: 'umd'
      }
    : {
        file: resolve('source/js/index.js'),
        format: 'iife',
        sourcemap: true,
        plugins: [terser()]
      },
  plugins: [nodeResolve(), commonjs(), babel()]
}
