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
        .state('archive', {
          url: '/archive',
          templateUrl: 'archive/archive.html',
          controller: 'ArchiveController as vm',
          resolve: {
            writingSamples: function(ArchiveService){
              return ArchiveService.getWritingSamples();
            }
          }
        })
        .state('random', {
          url: '/random',
          templateUrl: 'archive/random.html',
          controller: 'ArchiveController as vm'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'static/about.html',
          controller: 'WelcomeController as vm'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'static/contact.html',
          controller: 'WelcomeController as vm'
        })
        $urlRouterProvider.otherwise('welcome');
    });
