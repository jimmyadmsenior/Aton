'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Model3DProps {
  modelPath: string
  title?: string
  description?: string
  autoRotate?: boolean
  height?: string
}

export default function Model3D({ 
  modelPath, 
  title, 
  description, 
  autoRotate = true,
  height = "h-96" 
}: Model3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Dynamically import three.js to avoid SSR issues
    const loadThreeJS = async () => {
      try {
        const THREE = await import('three')
        const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js')
        const { OrbitControls } = await import('three/addons/controls/OrbitControls.js')

        if (!containerRef.current) return

        const container = containerRef.current
        const width = container.offsetWidth
        const height = container.offsetHeight || 400

        // Scene setup
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xf5f5f5)

        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        camera.position.set(0, 1, 3)

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(width, height)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        container.appendChild(renderer.domElement)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
        directionalLight.position.set(10, 10, 5)
        directionalLight.castShadow = true
        scene.add(directionalLight)

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.autoRotate = autoRotate
        controls.autoRotateSpeed = 1

        // Load 3D model
        const loader = new GLTFLoader()
        loader.load(
          modelPath,
          (gltf: any) => {
            const model = gltf.scene
            
            // Center and scale the model
            const box = new THREE.Box3().setFromObject(model)
            const center = box.getCenter(new THREE.Vector3())
            const size = box.getSize(new THREE.Vector3())
            
            const maxDim = Math.max(size.x, size.y, size.z)
            const scale = 2 / maxDim
            model.scale.setScalar(scale)
            model.position.sub(center.multiplyScalar(scale))
            
            scene.add(model)
            setIsLoading(false)
          },
          (progress: any) => {
            // Loading progress
            console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%')
          },
          (error: any) => {
            console.error('Error loading 3D model:', error)
            setError('Erro ao carregar modelo 3D')
            setIsLoading(false)
          }
        )

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate)
          controls.update()
          renderer.render(scene, camera)
        }
        animate()

        // Handle resize
        const handleResize = () => {
          if (!container) return
          const newWidth = container.offsetWidth
          const newHeight = container.offsetHeight || 400
          
          camera.aspect = newWidth / newHeight
          camera.updateProjectionMatrix()
          renderer.setSize(newWidth, newHeight)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize)
          if (container && renderer.domElement) {
            container.removeChild(renderer.domElement)
          }
          renderer.dispose()
        }
      } catch (err) {
        console.error('Error loading Three.js:', err)
        setError('Erro ao inicializar visualizador 3D')
        setIsLoading(false)
      }
    }

    loadThreeJS()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative w-full ${height} bg-gray-100 rounded-2xl overflow-hidden shadow-lg`}
    >
      <div ref={containerRef} className="w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Carregando modelo 3D...</p>
            </div>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center text-red-600">
              <p>{error}</p>
            </div>
          </div>
        )}
      </div>
      
      {!isLoading && !error && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm">
          Arraste para rotacionar • Scroll para zoom
        </div>
      )}
    </motion.div>
  )
}