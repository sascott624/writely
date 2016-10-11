var ArchiveController = function(writingSamples){
  var vm = this;

  vm.writingSamples = writingSamples.data;

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

}

angular
  .module('app')
  .controller('ArchiveController', ArchiveController)
