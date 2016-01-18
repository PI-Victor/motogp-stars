var App = Ember.Application.create({

})

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
})

App.ApplicationAdapter = DS.FixtureAdapter.extend()

/* Riders information
 Riders also have ranks which directly affect the outcome of their event.
 Pratice, Warm up, Qualifying, etc.
 */
App.Rider = DS.Model.extend({
  RiderRank: DS.attr('int'),
  RiderName: DS.attr('string')
})

/* Events can be:
  Pratice, (Standard rules apply to practice, first 12 go to Q2 and the rest to Q1)
  Qualifying 1, (First two places go to Q2)
  Qualifying 2, (First one goes to pole and that gives him a starting advantage)
  Warm up,
  Race
*/
App.RideEvents = DS.Model.extend({
  EventName: DS.atrr('string')
})

/*
Motogp bikes also have ranking that are mixed with rider ranking to influence the
outcome of events.
*/
App.MotoGPBike = DS.Model.extend({
  BikeName: DS.attr('string')
})


/* Circuits have weather as a variable, that would affect rider and bike
performance.
*/
App.MotoGPCircuit = DS.Model.extend({
  Name: DS.attr('string')
})

function loadFixtures(){

}
