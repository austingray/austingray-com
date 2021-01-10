import * as THREE from 'three';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, MeshProps, useFrame } from 'react-three-fiber';
import Box from './models/Box';
import Wall from './models/Wall';
import Void from './models/void';

const UpdateCamera = () => {
  useFrame(({ clock, camera }) => {
    camera.position.z = 15 + Math.sin(clock.getElapsedTime()) * 4;
  });
  return null;
};

const Scene: React.FC<MeshProps> = (props) => {
  return (
    <Canvas className="h-screen" camera={{ fov: 75, position: [0, 0, 100] }}>
      <UpdateCamera />
      <rectAreaLight
        width={3}
        height={3}
        color="white"
        intensity={88}
        position={[0, 0, 20]}
        castShadow
      />
      <Box position={[0, 0, 10]} />
      <Wall />
      <Void />
    </Canvas>
  );
};

export default Scene;
