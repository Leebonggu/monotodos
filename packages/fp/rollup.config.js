import ts from 'rollup-plugin-typescript2';

export default {
  input: [
    'src/index.ts',
  ],
  output: {
    dir: './',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [ts()],
  preserveModules: true,
}

// function buildJs(input, output) {
//   const defaultOutputConfing = {
//     format: 'esm',
//     sourcemap: true,
//   };

//   const esOutputConfig = {
//     ...defaultOutputConfing,
//     dir: output,
//   };

//   const config = {
//     input,
//     plugins: [ts()],
//     preserveModules: true,
//   }

//   return config;
// }