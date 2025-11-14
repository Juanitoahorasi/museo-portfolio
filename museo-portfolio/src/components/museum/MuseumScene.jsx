// Más adelante acá vamos a usar <Canvas /> de @react-three/fiber
// y montar el cubo con las paredes, cámara, etc.

function MuseumScene() {
  return (
    <div className="museum-canvas-container">
      {/* Mientras no tengamos la escena 3D, mostramos un placeholder */}
      <div className="museum-placeholder">
        <p>Museo 3D cargando... (placeholder)</p>
      </div>
    </div>
  );
}

export default MuseumScene;
