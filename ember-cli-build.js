/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults);
  app.import('bower_components/threejs/build/three.js');
  app.import('vendor/learning-threejs/libs/stats.js');
  app.import('vendor/learning-threejs/libs/dat.gui.js');

  return app.toTree();
};
