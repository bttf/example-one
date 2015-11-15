import Ember from 'ember';

const THREE = window.THREE;

export default Ember.Component.extend({
  light: new THREE.AmbientLight(0x0c0c0c),
  willInsertElement() {
    this.get('scene').add(this.get('light'));
  },
});
