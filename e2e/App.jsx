import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, Environment, CameraControls } from '@react-three/drei'

function App() {
  return (
    <Canvas camera={{ position: [1, 1, 1] }} style={{ width: 300, height: 150, background: 'white' }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

function Scene() {
  useEffect(() => {
    document.dispatchEvent(new Event('puppeteer:r3f'))
  }, [])

  return (
    <>
      <Box>
        <meshStandardMaterial />
      </Box>

      <Environment preset="city" />

      <CameraControls />
    </>
  )
}

export default App