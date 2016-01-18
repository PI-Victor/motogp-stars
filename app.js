var App = Ember.Application.create({})


App.Rider = Ember.Object.extend({
  getRiderRank: function() {

  }
})

App.RideEvents = Ember.Object.extend({
  eventName: '',
  getEventInfo: function(eventName) {

  }
})

App.MotoPrototype = Ember.Object.extend({
  bikeName: '',
  getBikeRank: function(bikeName) {}
})


App.MotoGPCircuit = Ember.Object.extend({
  circuitName: '',
  getCircuitName: function(circuitName) {}
})
