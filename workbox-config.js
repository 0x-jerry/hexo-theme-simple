module.exports = {
  // globDirectory: './dist/',
  // globPatterns: ['**/*.{html,js,css,gif,woff2,woff}'],
  globIgnores: ['hm.baidu.com/hm.js', 'www.googletagmanager.com/gtag/js'],
  swDest: './source/sw.js',
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|js|css|woff2|woff)$/,
      handler: 'StaleWhileRevalidate'
    },
    {
      urlPattern: /https:\/\/cdn\.bootcss\.com/,
      handler: 'StaleWhileRevalidate'
    }
  ]
}
