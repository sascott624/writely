var CreateService = function($http){
  var vm = this;

  vm.getWord = function(){
    return $http({
      method: 'GET',
      url: 'https://wordsapiv1.p.mashape.com/words/?random=true',
      headers: {
      'X-Mashape-Key': 'Fgn0xNn8bvmshqXyUdWyiu74UAgKp1soem0jsnqnohDclD8vWz'}
    });
  }

  vm.publish = function(content, author, genre, word){
    return $http.post('/writing_samples', {content: content, author: author, genre: genre, random: word});
  }
}

CreateService.$inject = ['$http'];


angular
  .module('app')
  .service('CreateService', CreateService)
