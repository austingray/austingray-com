import React, { useRef } from 'react';
import { MeshProps } from 'react-three-fiber';
import type { Mesh } from 'three';

interface PlaneProps extends MeshProps {
  width: number;
  height: number;
  color: string;
}

const Plane: React.FC<PlaneProps> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>();

  const { width, height, color } = props;

  return (
    <mesh {...props} ref={mesh}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Plane;
