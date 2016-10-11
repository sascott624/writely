var ArchiveShowController = function(writingSample){
  var vm = this;

  vm.writingSample = writingSample.data;
}

angular
  .module('app')
  .controller('ArchiveShowController', ArchiveShowController)
