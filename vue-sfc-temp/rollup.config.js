'use strict';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';


export default {
  input: 'src/index.js',
  output: {
    name: 'tempUI',
    format: 'umd'
  },
  plugins: [
    resolve({
      browser: true
    }),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    VuePlugin({
      css: true,
      compileTemplate: true
    }),
    postcss({
      plugins: [autoprefixer, cssnano]
    }),
    terser({
      output: {
        ascii_only: true // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ['console.log'] // 去掉console.log函数
      }
    })
  ]
};
