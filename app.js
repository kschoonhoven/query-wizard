
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })

            // url will be /form/start
            .state('form.start', {
                url: '/start',
                templateUrl: 'form-start.html'
            })

            // url will be /form/home
            .state('form.home', {
                url: '/home',
                templateUrl: 'form-home.html',
                controller: 'formHomeController'
            })

            // url will be /form/work
            .state('form.work', {
                url: '/work',
                templateUrl: 'form-work.html',
                controller: 'formWorkController'
            })

            // url will be /form/done
            .state('form.done', {
                url: '/done',
                templateUrl: 'form-done.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/start');
    })

// our controller for the form
// =============================================================================
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {country_family: {value: 0, timeelapsed: 0}, work_school: {value: 0, timeelapsed: 0}};

        // function to process the form
        $scope.processForm = function() {
            alert('awesome!');
        };

    })

    .controller('formHomeController', function($scope, $timeout, $state) {

        $scope.counter = 20;
        $scope.progressBar = 100;
        $scope.backgroundColor = 'blue';
        var stopped;

        $scope.countdown = function() {
            stopped = $timeout(function() {
                console.log($scope.counter);
                $scope.counter--;
                $scope.progressBar = $scope.counter * 5;
                if($scope.counter < 3)
                    $scope.backgroundColor = 'red';
                else if ($scope.counter < 10)
                    $scope.backgroundColor = 'orange';
                if( $scope.counter > 0)
                    $scope.countdown();
                else
                    $state.go('form.work');
            }, 1000);
        };

        $scope.next = function() {
            $scope.formData.country_family.timeelapsed = $scope.counter;
        }

        var elem = document.querySelector('.happiness-slider');
        if(elem)
            var init = new Powerange(elem, { min: -500, max: 500, start: 0, hideRange: true });

        $scope.countdown();

    })

    .controller('formWorkController', function($scope, $timeout, $state) {

        $scope.counter = 20;
        $scope.progressBar = 100;
        $scope.backgroundColor = 'blue';
        var stopped;

        $scope.countdown = function() {
            stopped = $timeout(function() {
                console.log($scope.counter);
                $scope.counter--;
                $scope.progressBar = $scope.counter * 5;
                if($scope.counter < 3)
                    $scope.backgroundColor = 'red';
                else if ($scope.counter < 10)
                    $scope.backgroundColor = 'orange';
                if( $scope.counter > 0)
                    $scope.countdown();
                else
                    $state.go('form.done');
            }, 1000);
        };

        $scope.next = function() {
            $scope.formData.work_school.timeelapsed = $scope.counter;
        }

        var elem = document.querySelector('.happiness-slider');
        if(elem)
            var init = new Powerange(elem, { min: -500, max: 500, start: 0, hideRange: true });

        $scope.countdown();
    });
