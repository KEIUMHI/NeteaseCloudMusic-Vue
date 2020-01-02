module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'api': '@/api',
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common'
      }
    }
  }
}