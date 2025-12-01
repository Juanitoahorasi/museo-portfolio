import * as THREE from "three";

function CubeRoom() {
  // Tamaño del cubo del museo (ancho, alto, profundidad)
  const size = 10;

  return (
    <group>
      {/* Cubo hueco, visto desde adentro */}
      <mesh>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          // Mirar hacia adentro del cubo
          side={THREE.BackSide}
          color="#111318"
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>

      {/* Piso ligeramente más claro, para dar referencia */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -size / 2 + 0.01, 0]}>
        <planeGeometry args={[size * 0.98, size * 0.98]} />
        <meshStandardMaterial color="#161922" roughness={0.95} />
      </mesh>
    </group>
  );
}

export default CubeRoom;
