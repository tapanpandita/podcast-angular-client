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

podcastControllers.controller('PodcastDetailCtrl', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce) {
    var podcastId = $routeParams.podcastId;
    var url = 'http://127.0.0.1:8000/api/v1/podcast/' + podcastId + '/';
    $http.get(url).success(function(data) {
        $scope.podcast = data;
        for (var i=0; i < $scope.podcast.episodes.length; i++) {
            var eurl = $scope.podcast.episodes[i].url;
            $scope.podcast.episodes[i].url = $sce.trustAsResourceUrl(eurl);
        }
    });
}]);
