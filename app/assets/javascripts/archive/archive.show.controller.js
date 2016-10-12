var ArchiveShowController = function(writingSample){
  var vm = this;

  vm.writingSample = writingSample.data;

}

ArchiveShowController.$inject = ['writingSample'];


angular
  .module('app')
  .controller('ArchiveShowController', ArchiveShowController)
