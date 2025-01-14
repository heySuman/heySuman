/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./src/assets/card.glb --transform --types 
Files: ./src/assets/card.glb [161.1KB] > D:\suman-shrestha\card-transformed.glb [26.45KB] (84%)
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["suman_id_(1)"]: THREE.Mesh;
  };
  materials: {
    ["suman_id (1)"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/card-transformed.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["suman_id_(1)"].geometry}
        material={materials["suman_id (1)"]}
      />
    </group>
  );
}

useGLTF.preload("/card-transformed.glb");
