var ArchiveService = function($http){
  var vm = this;

  vm.getWritingSamples = function(){
    return $http.get('/writing_samples.json');
  }
}

angular
  .module('app')
  .service('ArchiveService', ArchiveService)
