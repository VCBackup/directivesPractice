directiveLecture.controller('mainCtrl', function($scope){


    $scope.test = 'Below is the new directive!';
    $scope.name = 'Daniel';

    $scope.whatsMyName = function(firstName, lastName){
        alert('Your name is ' + firstName +' ' + lastName);
    };

});