import * as THREE from 'three';
import React, { useRef } from 'react';
import { MeshProps } from 'react-three-fiber';
import type { Mesh } from 'three';

const Wall: React.FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh>();
  const loader = new THREE.TextureLoader();

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[20, 20, 1]} />
      <meshBasicMaterial map={loader.load('/img/austingray.jpg')} />
    </mesh>
  );
};

export default Wall;
