angular.module('starter.services', [])

.factory('Salahs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var salahs = [{
    id: 0,
    name: 'Fajr',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Sun Rise',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Zuhr',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Asar 1',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Asar 2',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Maghrib',
    face: 'img/perry.png'
  }, {
    id: 6,
    name: 'Isha',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return salahs;
    },
    remove: function(salah) {
      salahs.splice(salahs.indexOf(salah), 1);
    },
    get: function(salahId) {
      for (var i = 0; i < salahs.length; i++) {
        if (salahs[i].id === parseInt(salahId)) {
          return salahs[i];
        }
      }
      return null;
    }
  };
});
