import * as THREE from 'three';
import { Curves } from 'three/examples/jsm/curves/CurveExtras';
import { addEffect } from 'react-three-fiber';
import create from 'zustand';

let guid = 1;

const [useStore, api] = create((set, get) => {
  const box = new THREE.Box3();

  return {
    sound: false,
    camera: undefined,

    mutation: {
      t: 0,
      position: new THREE.Vector3(),
      startTime: Date.now(),

      scale: 15,
      fov: 70,
      looptime: 40 * 1000,
      binormal: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      clock: new THREE.Clock(false),
      mouse: new THREE.Vector2(-250, 50),

      // Re-usable objects
      dummy: new THREE.Object3D(),
      ray: new THREE.Ray(),
      box: new THREE.Box3()
    },

    actions: {
      init(camera) {
        const { mutation, actions } = get();

        set({ camera });

        addEffect(() => {
          const { rocks, enemies } = get();

          const time = Date.now();

          // test for hits
          //if (a.some(data => data.distance < 15)) set(state => ({ health: state.health - 1 }))
        });
      },
      toggleSound(sound = !get().sound) {
        set({ sound });
        playAudio(audio.bg, 1, true);
      },
      updateMouse({ clientX: x, clientY: y }) {
        get().mutation.mouse.set(
          x - window.innerWidth / 2,
          y - window.innerHeight / 2
        );
      }
    }
  };
});

function playAudio(audio, volume = 1, loop = false) {
  if (api.getState().sound) {
    audio.currentTime = 0;
    audio.volume = volume;
    audio.loop = loop;
    audio.play();
  } else audio.pause();
}

export default useStore;
export { audio, playAudio };
