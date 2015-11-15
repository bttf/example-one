import Ember from 'ember';

const THREE = window.THREE;

export default Ember.Component.extend({
  geometry: new THREE.PlaneGeometry(60, 20, 1, 1),
  material: new THREE.MeshLambertMaterial({ color: 0xffffff }),
  plane: Ember.computed('geometry', 'material', function() {
    return new THREE.Mesh(this.get('geometry'), this.get('material'));
  }),

  willInsertElement() {
    this.set('plane.receiveShadow', 'true');
    this.set('plane.rotation.x', -0.5 * Math.PI);
    this.set('plane.position.x', 15);
    this.set('plane.position.y', 0);
    this.set('plane.position.z', 0);
    this.get('scene').add(this.get('plane'));
  },
});
