import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import svgr from '@svgr/rollup'
import url from 'rollup-plugin-url'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      globals: { 'styled-components': 'styled' },
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      globals: { 'styled-components': 'styled' },
      sourcemap: true,
    },
  ],
  external: ['styled-components'],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
}
