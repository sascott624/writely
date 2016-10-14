angular
    .module('app')
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
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
          // resolve: {
          //   'writingSamples': ['ArchiveService', function(ArchiveService){
          //     return ArchiveService.getWritingSamples();
          //   }]
          // }
        })
        .state('archive.id', {
          url: '/:id',
          templateUrl: 'archive/archive.show.html',
          controller: 'ArchiveShowController as vm',
          resolve: {
            'writingSample': ['$stateParams', 'ArchiveService', function($stateParams, ArchiveService){
              return ArchiveService.getSampleById($stateParams.id);
            }]
          }
        })
        .state('random', {
          url: '/random',
          templateUrl: 'archive/random.html',
          controller: 'ArchiveController as vm',
          resolve: {
            'writingSamples': ['ArchiveService', function(ArchiveService){
              return ArchiveService.getWritingSamples();
            }]
          }
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
    }]);
