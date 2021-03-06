const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          runtimeCaching,
          disable: process.env.NODE_ENV === 'development'
        }
      }
    ]
    // [withImages]
  ],
  {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // prevent caching
      defaultLoaders.babel.options.cache = false

      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/i,
        use: [
          defaultLoaders.babel,
          {
            loader: 'file-loader',
            options: {
              publicPath: '/.next',
              name: 'static/media/[name].[hash].[ext]'
            }
          }
        ]
      })

      config.resolve.modules.push(path.resolve(`./`))

      return config
    }
  }
)
