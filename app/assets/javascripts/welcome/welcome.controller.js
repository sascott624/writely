var WelcomeController = function(){
  var vm = this;

  vm.quote = {
    text: '“If you want to be a writer, you must do two things above all others: read a lot and write a lot.”',
    author: 'Stephen King'
  };

}

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
