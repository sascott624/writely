angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('welcome', {
          url: '/welcome',
          templateUrl: 'welcome/welcome.html',
          controller: 'WelcomeController as vm'
        })
        $urlRouterProvider.otherwise('welcome');
    });
