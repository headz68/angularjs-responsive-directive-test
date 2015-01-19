'use strict';

angular.module('app')
    .controller('MainCtrl', function ($scope) {
      $scope.header = 'Fuisz Angularjs Challenge';
    })
    .directive('myIndicator', function () {
      return {
        scope: {},
        link: function link(scope, element, attrs) {
          scope.animate = function animate(e) {
            var $target = $(e.target);
            if ($target.hasClass('animate-border')) {
              $target.removeClass('animate-border');
            } else {
              $target.addClass('animate-border');
            }
          }
        },
        templateUrl: function (elem, attr) {
          return '../../partials/my-indicator.html';
        }
      };
    });
