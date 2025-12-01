import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CubeRoom from "./CubeRoom.jsx";

function MuseumScene() {
  return (
    <div className="museum-canvas-container">
      <Canvas
        camera={{
          // Cámara dentro del cubo, levemente elevada
          position: [0, 1.5, 0],
          fov: 60,
        }}
      >
        {/* Color de fondo del canvas (oscuro, sobrio) */}
        <color attach="background" args={["#050509"]} />

        {/* Luces básicas */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 2]} intensity={0.9} />

        {/* Cargamos la sala principal del museo */}
        <Suspense fallback={null}>
          <CubeRoom />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MuseumScene;
