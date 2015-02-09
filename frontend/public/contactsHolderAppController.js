contactsHolderApp.controller('contactsHolderAppController', function($scope, $resource) {

  var searchResource = $resource('http://fast-gorge.herokuapp.com');

  $scope.doSearch = function (){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm
    });
  };
});