import Ember from 'ember';

const dat = window.dat;
const THREE = window.THREE;

export default Ember.Controller.extend({
  tick: false,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: new THREE.Scene(),
  camera: Ember.computed(function() {
    return new THREE.PerspectiveCamera(45, this.get('width') / this.get('height'), 0.1, 1000);
  }),
  renderer: new THREE.WebGLRenderer(),
  gui: new dat.GUI(),
  controls: Ember.Object.extend({
    rotationSpeed: 0.02,
    bouncingSpeed: 0.03,
    cameraX: -30,
    cameraY: 40,
    cameraZ: 30,
  }).create(),

  init() {
    this.get('renderer').setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    this.get('renderer').setSize(this.get('width'), this.get('height'));
    this.set('renderer.shadowMapEnabled', true);

    this.set('camera.position.x', this.get('controls.cameraX'));
    this.set('camera.position.y', this.get('controls.cameraY'));
    this.set('camera.position.z', this.get('controls.cameraZ'));
    this.get('camera').lookAt(this.get('scene.position'));

    document.getElementById('webgl-output').appendChild(this.get('renderer.domElement'));

    this.get('gui').add(this.get('controls'), 'rotationSpeed', 0, 0.5);
    this.get('gui').add(this.get('controls'), 'bouncingSpeed', 0, 0.5);
    this.get('gui').add(this.get('controls'), 'cameraX', -50, 50);
    this.get('gui').add(this.get('controls'), 'cameraY', -50, 50);
    this.get('gui').add(this.get('controls'), 'cameraZ', -50, 50);

    window.addEventListener('resize', this.onResize.bind(this), false);
    this.render();
  },

  render() {
    this.toggleProperty('tick');
    this.set('camera.position.x', this.get('controls.cameraX'));
    this.set('camera.position.y', this.get('controls.cameraY'));
    this.set('camera.position.z', this.get('controls.cameraZ'));
    requestAnimationFrame(this.get('render').bind(this));
    this.get('renderer').render(this.get('scene'), this.get('camera'));
  },

  onResize() {
    this.set('camera.aspect', window.innerWidth / window.innerHeight);
    this.get('camera').updateProjectionMatrix();
    this.get('renderer').setSize(window.innerWidth, window.innerHeight);
  },
});
