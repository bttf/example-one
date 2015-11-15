import Ember from 'ember';

export default Ember.Component.extend({
  geometry: new THREE.SphereGeometry(4, 20, 20),
  material: new THREE.MeshLambertMaterial({ color: 0x7777ff }),
  sphere: Ember.computed('geometry', 'material', function() {
    return new THREE.Mesh(this.get('geometry'), this.get('material'));
  }),
  step: 0,
  position: Ember.computed.alias('sphere.position'),
  bouncingSpeed: Ember.computed.alias('controls.bouncingSpeed'),

  willInsertElement() {
    this.set('sphere.castShadow', true);
    this.set('sphere.position.x', 20);
    this.set('sphere.position.y', 0);
    this.set('sphere.position.z', 2);

    this.get('scene').add(this.get('sphere'));
  },
  
  render: Ember.observer('tick', function() {
    this.set('step', this.get('step') + this.get('bouncingSpeed'));
    this.set('position.x', 20 + (10 * (Math.cos(this.get('step')))));
    this.set('position.y', 2 + (10 * Math.abs(Math.sin(this.get('step')))));
  }),
});
