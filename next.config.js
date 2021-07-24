const path = require('path')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([[withImages]], {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  wepack: (config, options) => {
    if (!options.dev) {
      options.defaultLoaders.babel.options.cache = false
    }

    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/i,
      use: [
        options.defaultLoaders.babel,
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
})
