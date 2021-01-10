import React, { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import type { Mesh } from 'three';

const PlaneGround: React.FC<MeshProps> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>();

  return (
    <mesh {...props} ref={mesh}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
};

export default PlaneGround;
