import  {Suspense,useState,useEffect}from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload } from '@react-three/drei'
// import CanvasLoader from '../Loader'

const Computers = ( {isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
      <mesh>
      <hemisphereLight intensity={0.15}
       groundColor='black'/>
      <pointLight intensity={1}/>
      <spotLight
      position = {[-20,50,10]}
      angle={0.12}
      penubra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.7 :0.75}
      position={isMobile ? [0,-3,-2.2] :[0,-3.25,-1.5]}
      />
      </mesh>
   
  ) 
}

const ComputersCanvas = () =>{
  const [isMobile,setIsMobile]= useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQuerychange = (e)=>{
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQuerychange);
    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQuerychange);
    }
  },[])

return(
  <Canvas
  frameLoop='demand'
  shadows
  camera={{position:[20,3,5],fov:25}}
  gl={{preserveDrawingBuffer:true}}
  >
    <Suspense >
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <Computers isMobile={isMobile}/>
    </Suspense>
    <Preload all />
  </Canvas>
)

}

export default ComputersCanvas