const esbuild = require('esbuild')
const { sassPlugin } = require('esbuild-sass-plugin')

esbuild.build({
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  loader: { '.jpg': 'dataurl' },
  sourcemap: true,
  outdir: 'app/assets/builds',
  plugins: [sassPlugin()],
  watch: true,
}).catch(() => process.exit(1))
