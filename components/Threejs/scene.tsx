import React from 'react';
import { Canvas, MeshProps } from 'react-three-fiber';
import Box from './models/Box';
import Void from './models/void';
import Plane from './models/plane';
import Camera from './camera';

const Scene: React.FC<MeshProps> = (props) => {
  return (
    <Canvas className="h-screen">
      <Camera>
        <Camera position={[0, 3, 10]} />
      </Camera>
      <rectAreaLight
        width={3}
        height={8}
        color="white"
        intensity={18}
        position={[0, 0, 20]}
        castShadow
      />
      <Box position={[0, 0, 10]} />
      <Plane width={1000} height={1000} color="green" position={[0, 0, 1]} />
      <Void />
    </Canvas>
  );
};

export default Scene;
