import HeroOverlay from "./components/layout/HeroOverlay.jsx";
import MuseumScene from "./components/museum/MuseumScene.jsx";
import { texts } from "./texts/es.js";

function App() {
  return (
    <div className="app-root">
      {/* Overlay con la presentación breve del usuario */}
      <HeroOverlay
        name={texts.hero.name}
        role={texts.hero.role}
        tagline={texts.hero.tagline}
      />

      {/* Contenedor principal del museo 3D */}
      <main className="museum-wrapper">
        <MuseumScene />
      </main>
    </div>
  );
}

export default App;
