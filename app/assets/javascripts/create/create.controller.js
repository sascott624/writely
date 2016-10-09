var CreateController = function(CreateService){
  var vm = this;

  var genres = ["story", "poem", "dialogue"];

  vm.quantity = Math.floor(Math.random() * genres.length) + 1

  vm.genre = genres[vm.quantity];

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
