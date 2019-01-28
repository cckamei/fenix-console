'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_HOST: '"http://localhost:8000"'
  API_HOST: '"http://shop.fenix-world.com"'
});