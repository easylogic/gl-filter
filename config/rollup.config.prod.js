import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import glslify from 'rollup-plugin-glslify';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


// rollup.config.js
export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/gl-filter.min.js',
    format: 'iife',
  },
  name: 'GLFilter',  
  plugins : [
    peerDepsExternal(),
    glslify({ basedir: 'src/util/glsl/source' }),
    babel({
      exclude: ['node_modules/**', 'src/util/glsl/source/**']
    }),
    uglify()
  ]
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/gl-filter.js',
    format: 'umd'
  },
  name: 'GLFilter',
  plugins : [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}];