/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
        // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/assets/css/bootstrap.min.css');
  app.import('vendor/assets/css/animate.css');
  app.import('vendor/assets/css/font-awesome.min.css');
  app.import('vendor/assets/css/magnific-popup.css');
  app.import('vendor/assets/css/owl.carousel.css');
  app.import('vendor/assets/css/owl.theme.css');
  app.import('vendor/assets/css/simpletextrotator.css');
  app.import('vendor/assets/css/style.css');
  app.import('vendor/assets/js/jquery-1.11.0.min.js');
  app.import('vendor/assets/js/jquery.backstretch.min.js');
  app.import('vendor/assets/js/jquery.countTo.js');
  app.import('vendor/assets/js/jquery.fitvids.js');
  app.import('vendor/assets/js/jquery.magnific-popup.min.js');
  app.import('vendor/assets/js/jquery.simple-text-rotator.min.js');
  app.import('vendor/assets/js/jquery.waypoints.js');
  app.import('vendor/assets/js/bootstrap.min.js');
  app.import('vendor/assets/js/owl.carousel.min.js');
  app.import('vendor/assets/js/smoothscroll.js');
  app.import('vendor/assets/js/wow.min.js');
  app.import('vendor/assets/js/custom.js');

  return app.toTree();
};
