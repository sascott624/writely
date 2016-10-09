var CreateController = function(){
  var vm = this;

  vm.genre = "story";

  vm.word = {
    actual: "cat",
    type: "noun"
  };

  vm.creation = "";

}

angular
  .module('app')
  .controller('CreateController', CreateController)
