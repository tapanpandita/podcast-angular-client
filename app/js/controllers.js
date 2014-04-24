'use strict';

/* Controllers */
var podcastControllers = angular.module('podcastControllers', []);

podcastControllers.controller('PodcastListCtrl', ['$scope', '$http', function($scope, $http) {
    var url = 'http://127.0.0.1:8000/api/v1/podcast/';
    $http.get(url).success(function(data) {
        var podcastList = data.results;
        $scope.podcasts = podcastList;
    });
}]);

podcastControllers.controller('PodcastDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    var podcastId = $routeParams.podcastId
    var url = 'http://127.0.0.1:8000/api/v1/podcast/' + podcastId + '/'
    $http.get(url).success(function(data) {
        $scope.podcast = data;
    });
}]);
