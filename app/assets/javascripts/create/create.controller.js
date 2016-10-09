var CreateController = function(CreateService){
  var vm = this;

  vm.genre = "story";

  // vm.word = {
  //   actual: "cat",
  //   type: "noun"
  // };

  vm.creation = "";
  vm.word = '';

  vm.newWord = function(){
    CreateService.getWord().then(function(response){
      vm.word = response.data.word;
    })
  }

  CreateService
    .getWord()
    .then(function(response){
      vm.word = response.data.word;
    })

}

angular
  .module('app')
  .controller('CreateController', CreateController)
