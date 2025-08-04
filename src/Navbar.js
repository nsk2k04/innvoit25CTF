// src/components/DemogorgonCanvas.js
import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import './Navbar.css' // Assuming you have a CSS file for styling
import StrangerThingsNavbar from './Navbarst'
function DemogorgonModel({ url }) {
  const group = useRef()
  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && animations.length > 0) {
      const firstAnim = animations[0].name 
      console.log(`Playing animation: ${firstAnim}`)
      actions[firstAnim]
        .reset()
        .setLoop(THREE.LoopRepeat)
        .play()
    }
  }, [actions, animations])

  return (
    <group ref={group} scale={0.18} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export default function DemogorgonCanvas() {
  return (
    <div style={{
      
      
      left: '0',
      width: '100%',
      height: '100px',
      zIndex: 2,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [-2, 1, 4], fov: 1050 }}
        style={{ width: '100px', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <DemogorgonModel url="/assets/demogorgon.glb" />
      </Canvas>
    </div>
  )
}

export function Navbar() {
  return (
    <nav className="navbar">
        <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/mindflayerbg.mp4"
      />
      <h1 className="navbar-title">Stranger Things Symposium</h1>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export function Navbartab() {
  return (
    <nav className="navbartab">
      <div>
        <div>
         
        <StrangerThingsNavbar />
        </div>
        {/* <div className="demogorgon-canvas">
        <DemogorgonCanvas />
        </div> */}
      </div>
    </nav>
  )
}
