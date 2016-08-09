var devApp = angular.module('DevNetApp', ['ngMaterial']);

devApp.controller("DevAppCtrl" ,function($scope) {

  $scope.currentUser = {
    name: "Michael Mitrakos",
    username: "@mitrakmt",
    followers: 153,
    following: 26,
    commits: 1504
  }

  $scope.testTrendingProjects = [
    {
      name: "Pokemon Go Map",
      link: "www.pokemon.com",
      description: "This is the description!",
      language: "PHP",
      collaborators: 24,
      forks: 198,
      issues: 34
    },
    {
      name: "Emerald Dream",
      link: "www.o2lgame-c0dbc.firebaseapp.com/",
      description: "This is the description!",
      language: "JavaScript",
      collaborators: 34,
      forks: 123,
      issues: 67
    },
    {
      name: "Hooli Mobile",
      link: "www.hoolixyz.com",
      description: "This is the description!",
      language: "JavaScript",
      collaborators: 52,
      forks: 154,
      issues: 86
    },
    {
      name: "Pied Piper",
      link: "www.piedpiper.com",
      description: "This is the description!",
      language: "Angular JS",
      collaborators: 18,
      forks: 198,
      issues: 23
    },
    {
      name: "Nucleus",
      link: "www.nucleus.com",
      description: "This is the description!",
      language: "Python",
      collaborators: 35,
      forks: 123,
      issues: 14
    },
  ];

  // _.forEach($scope.testTrendingProjects, function(trend) {
  //   $(".trending-projects").append("<div class='trendingName'>" + trend.name + "</div>");
  // });

  $scope.testFeed = [
    {

    },
  ]

})
