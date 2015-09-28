courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory){
    $scope.courses = CoursesFactory.courses;
    $scope.CoursesFactory = CoursesFactory;

//    $scope.someVar = "hello";

    $scope.someVar = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId)

    $scope.alertUs = function (message) {
        alert(message);
    }

});
