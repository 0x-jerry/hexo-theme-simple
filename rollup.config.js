import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import path from 'path'

const resolve = (...args) => path.join(__dirname, ...args)

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('source/js/index.js'),
    format: 'iife',
    sourcemap: true,
    plugins: isDev ? [] : [terser()]
  },
  plugins: [
    json(),
    replace({
      'process.env.NODE_ENV': isDev ? '"development"' : '"production"'
    }),
    nodeResolve(),
    commonjs(),
    babel()
  ]
}
