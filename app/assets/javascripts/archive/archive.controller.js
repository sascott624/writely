var ArchiveController = function(writingSamples){
  var vm = this;

  vm.writingSamples = writingSamples.data;

  vm.id = Math.floor(Math.random() * vm.writingSamples.length);

  vm.writingSample = vm.writingSamples[vm.id];
}

angular
  .module('app')
  .controller('ArchiveController', ArchiveController)
