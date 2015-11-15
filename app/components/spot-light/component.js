import Ember from 'ember';

const THREE = window.THREE;

export default Ember.Component.extend({
  spotLight: new THREE.SpotLight(0xFFFFFF),

  willInsertElement() {
    this.get('spotLight.position').set(-40, 60, -10);
    this.set('spotLight.castShadow', true);
    this.get('scene').add(this.get('spotLight'));
  },
});
