/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-8be4a2579dd84586b915068e475073ee
Title: Python
*/

import { Float, useGLTF } from "@react-three/drei"


export default function Python(props) {
  const { nodes, materials } = useGLTF('/models/python.glb')
  return (
    <Float floatIntensity={0.1}>
      <group scale={0.01} {...props} dispose={null}>
        <mesh
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/python.glb')
