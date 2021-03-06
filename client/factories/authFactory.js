"use strict";

angular.module("PupTracker").factory("AuthFactory", ($q, $http, $rootScope) => {
  let currentUser = null;

  return {
    createUser(userObj) {
      return $q((resolve, reject) => {
        $http.post("/register", userObj).then(userData => {
          console.log("new user added", userData);
          currentUser = userData;
          resolve(userData.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    loginUser(userObj) {
      return $q((resolve, reject) => {
        $http.post("/login", userObj).then(user => {
          currentUser = user;
          resolve(user.data);
        });
      }).catch(err => {
        reject(err);
      });
    },

    logoutUser() {
      return $q((resolve, reject) => {
        $http.post("/logout").then(user => {
          console.log("logged out the user");
          currentUser = null;
          resolve();
        });
      }).catch(err => {
        reject(err);
      });
    },

    getCurrentUser() {
      return currentUser;
    },

    setUserStatus() {
      return $http
        .get("/status")
        .then(user => {
          if (user) {
            currentUser = user.data;
          } else {
            currentUser = null;
          }
        })
        .catch(() => {
          currentUser = null;
        });
    },

    getCurrentUser() {
      return currentUser;
    },

    broadcastUserLogin(user) {
      $rootScope.$broadcast("handleBroadcast", user);
    }
  };
});
