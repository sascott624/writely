var ArchiveController = function(ArchiveService, $state){
  var vm = this;
  var writingSamples = [];

  activate();

  function activate(){
    return ArchiveService.getWritingSamples().then(function(response){
      vm.writingSamples = response.data;
      return vm.writingSamples;
    });
  }



  vm.id = Math.floor(Math.random() * vm.writingSamples.length);

  vm.writingSample = vm.writingSamples[vm.id];

  vm.currentPage = 0;
  vm.begin = 0;

  vm.pageCount = function(){
    return Math.ceil(vm.writingSamples.length/6);
  }

  vm.nextPage = function(){
    vm.currentPage += 1;
    vm.begin += 6;
  }

  vm.prevPage = function(){
    vm.currentPage -= 1;
    vm.begin -= 6;
  }

  vm.shuffle = function(){
    $state.reload();
  }
}

ArchiveController.$inject = ['ArchiveService', '$state'];


angular
  .module('app')
  .controller('ArchiveController', ArchiveController)
