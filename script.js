angular.module('myApp', []);
angular.module('myApp').directive('toolTile', function () {
    return {
      restrict: 'A',
      scope: {
        tool: '='
      },
      replace: true,
      templateUrl: 'tool-tile-template.html',
      link: function (scope, elem, attrs) {
        //link restricts that function can only access to the directive scope
        scope.hi = function () {
          alert('This tool... ' + scope.tool.name);
        }
      }
    };
});
angular.module('myApp').controller('toolCtrl', function ($scope) {
  $scope.tools = [
    {
      name: 'pymks',
      link: 'http://materialsinnovation.github.io/pymks/',
      description: 'Materials Knowledge System in Python',
      language: 'Python'
    },
    {
      name: 'project-pages',
      link: 'http://materialsinnovation.github.io/project-pages/',
      description: 'An integrated research blogging front end template',
      language: 'HTML, JavaScript'
    }];

});

angular.module('myApp').directive('actorTile', function () {
    return {
      restrict: 'A',
      scope: {
        actor: '='
      },
      replace: true,
      templateUrl: 'actor-tile-template.html',
      link: function (scope, elem, attrs) {
        //link restricts that function can only access to the directive scope
        scope.hi = function () {
          alert('HI THERE, MY NAME IS ' + scope.actor.name);
        }
      }
    };
});

angular.module('myApp').controller('actorCtrl', function ($scope) {
  $scope.projects = [
    {
      name: 'Exploring Process Structure Linkages in Machining of Commercial Purity Titanium',
      link: 'http://matinfteam4.github.io/',
      image: 'http://matinfteam4.github.io/images/analysis_revised.png',
      description: 'Establishing Process-Structure linkages using e-collaboration and materials informatics tools in MATIN.'
    }
  ];
});
