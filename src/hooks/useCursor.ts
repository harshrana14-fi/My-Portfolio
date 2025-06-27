import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const useCursor = (sphereRef?: React.RefObject<THREE.Mesh | null>) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      requestAnimationFrame(() => {
        if (cursorFollowerRef.current) {
          cursorFollowerRef.current.style.left = `${e.clientX}px`;
          cursorFollowerRef.current.style.top = `${e.clientY}px`;
        }
      });

      if (sphereRef?.current) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        sphereRef.current.position.x = x * 0.5;
        sphereRef.current.position.y = y * 0.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [sphereRef]);

  return { cursorRef, cursorFollowerRef };
};
