var CreateController = function(CreateService){
  var vm = this;

  var genres = ["story", "poem", "dialogue", "joke", "summary", "introduction", "scene", "song", "tribute", "law", "high school rule", "tardy excuse", "doctor's note", "confession"];
  vm.quantity = Math.floor(Math.random() * genres.length)
  vm.genre = genres[vm.quantity];

  vm.creation = "";
  vm.word = '';

  vm.newGenre = function(){
    vm.newQuantity = Math.floor(Math.random() * genres.length);
    vm.genre = genres[vm.newQuantity];
  }

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
