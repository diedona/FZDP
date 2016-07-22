(function () {

  var app = angular.module('fzdp.bp.config', []);
  app.config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider

    //------------------------------
    // HOME
    //------------------------------

    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })

  };

}());