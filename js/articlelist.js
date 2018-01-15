var app = angular.module('SinglePage', []);

app.controller('articleController', function($scope) {
    var arr=[];
    for (var i = 0; i <10; i++) {
        arr.push(i+1);
    }
    $scope.listArticle=arr;
});