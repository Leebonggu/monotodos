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
  plugins: [
    ts({
      tsconfigOverride: {
        exclude: [
          'src/stories',
          'src/**/*.stories.@(js|jsx|ts|tsx)',
          'src/**/*.stories.mdx'
        ],
      }
    },
  )],
  preserveModules: true,
  external: ['react']
}