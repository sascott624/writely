angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('welcome', {
          url: '/welcome',
          templateUrl: 'welcome/welcome.html',
          controller: 'WelcomeController as vm'
        })
        .state('create', {
          url: '/create',
          templateUrl: 'create/create.html',
          controller: 'CreateController as vm'
        })
        $urlRouterProvider.otherwise('welcome');
    });
