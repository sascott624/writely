var CreateController = function(CreateService, $state, $timeout){
  var vm = this;

  var genres = ["story", "poem", "dialogue", "joke", "summary", "introduction", "scene", "song", "tribute", "law", "high school rule", "tardy excuse", "doctor's note", "confession", "speech", "memoir", "lie", "greeting card", "movie trailer voiceover"];
  vm.quantity = Math.floor(Math.random() * genres.length)
  vm.genre = genres[vm.quantity];

  vm.content = "";
  vm.word = '';
  vm.author = '';

  var modal = UIkit.modal("#author-name");

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
    vm.newWord();
    vm.newGenre();
    vm.content = "";
    vm.author = "";
  }

  vm.submit = function(){
    CreateService.publish(vm.content, vm.author, vm.genre);
    $timeout(function(){modal.hide(), vm.refresh()}, 500);
    $timeout(function(){UIkit.modal.alert("Thank you for your submission!")}, 1000);
  }

}

angular
  .module('app')
  .controller('CreateController', CreateController)
