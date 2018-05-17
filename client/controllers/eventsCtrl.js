"use strict";

angular
  .module("PupTracker")
  .controller("EventsCtrl", function($scope, EventFactory, $location, $routeParams, $window) {

    $scope.backBtn = () => {
      $window.history.back();
    }
    
    $scope.newEvent = {}

    $scope.getAllEvents = () => {
      $scope.petId = $routeParams.id;
      console.log("calling get all events");
      EventFactory.getAllEvents($scope.petId).then(eventData => {
        $scope.events = eventData.data;
      });
    };

    $scope.addEventPage = () => {
      $location.path(`/mypets/newevent/${$scope.petId}`);
    };

    // $scope.getOneEvent = () => {
    //   $scope.petId = $routeParams.id;
    //   EventFactory.getOneEvent($scope.petId).then
    // }

    $scope.createEvent = () => {
      $scope.newEvent.pet_id = $routeParams.id;
      EventFactory.createNewEvent($scope.newEvent)
      .then(data => {
        console.log("added event ON CLIENT SIDE", data)
        $location.url(`/mypets/events/${data.data.pet_id}`)
      })
    };

    $scope.open = () => {
      $scope.showModal = true;
    }

    $scope.close = () => {
      $scope.showModal = false;
    }

  });
