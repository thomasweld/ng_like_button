function ButtonController($scope){

  $scope.buttonCounter = 0;

  $scope.buttonIterator = function ( buttonCounter ) {
    ++$scope.buttonCounter;
  }

}

ButtonController.$inject = [ '$scope' ];

export { ButtonController };
