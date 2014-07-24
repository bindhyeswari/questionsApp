

angular.module('myApp', [])
    .controller('helloController', function ($scope) {
        $scope.inp_question = {
            answers: [{val:''}, {val:''}, {val:''}, {val:''}],
            question: ''
        };

        $scope.reset = function () {

        };

        $scope.inp_question = {
            answers: [{val:''}, {val:''}, {val:''}, {val:''}],
            question: ''
        };

        $scope.collection_questions = [];

        $scope.addQuestion = function () {

            var obj = {
                question: $scope.inp_question.question,
                answers: []
            };
            for (var i = 0, len = $scope.inp_question.answers.length; i < len; i++) {
                obj.answers.push($scope.inp_question.answers[i].val);
            }
            $scope.collection_questions.push(obj);

            console.log($scope.collection_questions);
        };




    });

