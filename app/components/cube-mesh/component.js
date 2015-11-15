import Ember from 'ember';

const THREE = window.THREE;

export default Ember.Component.extend({
  geometry: new THREE.BoxGeometry(4, 4, 4),
  material: new THREE.MeshLambertMaterial({ color: 0xff0000 }),
  cube: Ember.computed('geometry', 'material', function() {
    return new THREE.Mesh(this.get('geometry'), this.get('material'));
  }),
  rotation: Ember.computed.alias('cube.rotation'),
  rotationSpeed: Ember.computed.alias('controls.rotationSpeed'),

  willInsertElement() {
    this.set('cube.castShadow', true);
    this.set('cube.position.x', -4);
    this.set('cube.position.y', 3);
    this.set('cube.position.z', 0);

    this.get('scene').add(this.get('cube'));
  },

  render: Ember.observer('tick', function() {
    this.set('rotation.x', this.get('rotation.x') + this.get('rotationSpeed'));
    this.set('rotation.y', this.get('rotation.y') + this.get('rotationSpeed'));
    this.set('rotation.z', this.get('rotation.z') + this.get('rotationSpeed'));
  }),
});
