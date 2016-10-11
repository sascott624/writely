var ArchiveController = function(writingSamples){
  var vm = this;

  vm.writingSamples = writingSamples.data;
}

angular
  .module('app')
  .controller('ArchiveController', ArchiveController)
