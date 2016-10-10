var CreateController = function(CreateService){
  var vm = this;

  var genres = ["story", "poem", "dialogue", "joke", "summary", "introduction", "scene", "song", "tribute", "law", "high school rule", "tardy excuse", "doctor's note", "confession", "speech", "memoir", "lie", "greeting card", "movie trailer voiceover"];
  vm.quantity = Math.floor(Math.random() * genres.length)
  vm.genre = genres[vm.quantity];

  vm.content = "";
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

  vm.refresh = function(){
    vm.content = "";
  }

}

angular
  .module('app')
  .controller('CreateController', CreateController)
