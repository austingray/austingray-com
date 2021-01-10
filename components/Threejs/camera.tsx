import { useEffect, useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera } from 'three';

function Camera(props) {
  const ref = useRef<PerspectiveCamera>();
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(ref.current), []);
  // Update it every frame
  useFrame(({ clock }) => {
    ref.current.updateMatrixWorld();
    ref.current.position.z = 15 + Math.sin(clock.getElapsedTime()) * 4;
  });
  return <perspectiveCamera ref={ref} {...props} />;
}

export default Camera;
