module.exports = {
  // globDirectory: './dist/',
  // globPatterns: ['**/*.{html,js}'],
  swDest: './source/sw.js',
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|js|css|woff2|woff)$/,
      handler: 'StaleWhileRevalidate'
    }
  ]
}
