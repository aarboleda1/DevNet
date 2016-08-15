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

  $scope.developerFeed = [
    {
      name: "Anton",
      recentProject: "DevNet",
      recentProjectUrl: "www.github.com/devnet",
      recentProjectForks: 32,
      openSourceStatus: "Open-Source"
    },
    {
      name: "Mark Zuckerburg",
      recentProject: "The Facebook",
      recentProjectUrl: "www.github.com/facebook",
      recentProjectForks: 8932,
      openSourceStatus: "Open-Source"
    },
    {
      name: "Dick Costello",
      recentProject: "Project Twitter",
      recentProjectUrl: "www.github.com/twitter",
      recentProjectForks: 7562,
      openSourceStatus: "Not Open-Source"
    },
    {
      name: "Michael Flores",
      recentProject: "Project Pandemic",
      recentProjectUrl: "www.github.com/pandemic",
      recentProjectForks: 42,
      openSourceStatus: "Open-Source"
    },
    {
      name: "Jonathan Chu",
      recentProject: "School Project",
      recentProjectUrl: "www.github.com/school",
      recentProjectForks: 2,
      openSourceStatus: "Open-Source"
    },
    {
      name: "Nick Mitrakos",
      recentProject: "Olympic Website",
      recentProjectUrl: "www.github.com/olympics",
      recentProjectForks: 532,
      openSourceStatus: "Not Open-Source"
    }
  ]

})
