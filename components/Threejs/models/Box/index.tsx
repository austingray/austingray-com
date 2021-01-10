import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import type { Mesh } from 'three';

const Box: React.FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh>();
  const loader = new THREE.TextureLoader();

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial map={loader.load('/img/always-has-been.jpg')} />
    </mesh>
  );
};

export default Box;
