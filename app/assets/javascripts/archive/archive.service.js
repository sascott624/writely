var ArchiveService = function($http){
  var vm = this;

  vm.getWritingSamples = function(){
    return $http.get('/writing_samples.json');
  }

  vm.getSampleById = function(id){
    return $http.get('/writing_samples/' + id + '.json');
  }
}

ArchiveService.$inject = ['$http'];

angular
  .module('app')
  .service('ArchiveService', ArchiveService)
