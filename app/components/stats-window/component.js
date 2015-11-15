import Ember from 'ember';

const Stats = window.Stats;

export default Ember.Component.extend({
  stats: new Stats(),
  willInsertElement() {
    this.set('stats.domElement.style.position', 'absolute');
    this.set('stats.domElement.style.left', '0px');
    this.set('stats.domElement.style.top', '0px');

    document.getElementById('stats-output').appendChild(this.get('stats.domElement'));
  },
  render: Ember.observer('tick', function() {
    this.get('stats').update();
  }),
});
