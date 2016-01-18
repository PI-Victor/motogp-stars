var App = Ember.Application.create({

})

App.Rider = Ember.Object.extend({
  RiderRank: null,

  getRiderRank: function() {
    return this.get('RiderRank')
  }.property('RiderRank')
})

App.RideEvents = Ember.Object.extend({
  EventName: null,

  getEventInfo: function() {
    return this.get('eventname')
  }.property('EventName')
})

App.MogoGPBike = Ember.Object.extend({
  BikeName: null,

  getBikeRank: function() {
    return this.get('BikeName')
  }.property('BikeName')
})


App.MotoGPCircuit = Ember.Object.extend({
  Name: null,

  getCircuitName: function(circuitName) {
    return this.get('CircuitName')
  }.property('CircuitName')
})
