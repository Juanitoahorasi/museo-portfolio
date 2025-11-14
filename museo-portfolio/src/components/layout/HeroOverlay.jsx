function HeroOverlay({ name, role, tagline }) {
  return (
    <header className="hero-overlay">
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-role">{role}</p>
        <p className="hero-tagline">{tagline}</p>
      </div>
    </header>
  );
}

export default HeroOverlay;
