const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Subtle gold accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 74% 49% / 0.3) 0%, transparent 70%)",
        }}
      />
      
      {/* Bottom accent */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[300px] opacity-5"
        style={{
          background: "linear-gradient(to top, hsl(43 74% 49% / 0.2), transparent)",
        }}
      />
    </div>
  );
};

export default GeometricBackground;