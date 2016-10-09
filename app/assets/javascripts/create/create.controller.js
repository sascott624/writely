var CreateController = function(){
  var vm = this;

  vm.test = "testing";

}

angular
  .module('app')
  .controller('CreateController', CreateController)
