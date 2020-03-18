import pkg from '../package.json'

export const configs = {
  debug: process.env.NODE_ENV === 'development',
  version: pkg.version
}
