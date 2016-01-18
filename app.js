var App = Ember.Application.create({

})

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
})

App.ApplicationAdapter = DS.FixtureAdapter.extend()

App.Rider = DS.Model.extend({
  RiderRank: DS.attr('int'),
  RiderName: DS.attr('string')
})

App.RideEvents = DS.Model.extend({
  EventName: DS.atr('string')
})

App.MogoGPBike = DS.Model.extend({
  BikeName: DS.attr('string')
})

App.MotoGPCircuit = DS.Model.extend({
  Name: DS.attr('string')
})
