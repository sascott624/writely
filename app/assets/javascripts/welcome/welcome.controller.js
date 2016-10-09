var WelcomeController = function(){
  var vm = this;

  vm.greet = "hello";

}

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
