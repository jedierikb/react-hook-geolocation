import babel from '@rollup/plugin-babel';
import {
  terser
} from 'rollup-plugin-terser';

export default [
  {
    input: 'src/export.js',
    output: {
      file: 'lib/geo.js',
      format: 'esm'
    },
    plugins: [
      babel({
        "exclude": 'node_modules/**',
        "babelHelpers": "bundled",
        "presets": [
          [
            "@babel/preset-react", {
              "runtime": "automatic"
            }
          ],
          "@babel/preset-env"
        ]
      }),
      terser()
    ],
    external: [
    ]
  },
];