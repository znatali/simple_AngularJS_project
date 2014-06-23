Mysite.controller('FeedController', function ($scope, GlobalService, PostService, posts) {
    $scope.posts = posts;
    $scope.globals = GlobalService;
    //calling board service
    $scope.create = function () {
        PostService.save($scope.post).then(function (data) {
            $scope.post = data;
            $scope.posts.push(data);
            $scope.postModalCreate = false;
        }, function(status){
            console.log(status);
        });
    };
});