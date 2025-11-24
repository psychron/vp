const Hero = () => {
  return (
    <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          The Next Evolution In Palm Oil Extraction
        </h1>
        
        {/* Logo Placeholder - Replace with actual logo */}
        <div className="mb-10 flex justify-center">
          <div className="w-48 h-48 bg-secondary rounded-lg flex items-center justify-center border border-border shadow-sm">
            <div className="text-center">
              <div className="text-4xl mb-2">🌴</div>
              <p className="text-xs text-muted-foreground">Logo Placeholder</p>
              <p className="text-xs text-muted-foreground mt-1">Replace with logo.png</p>
            </div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We've developed a patented process designed to help palm oil mills cut processing costs, 
          produce higher quality oil, all while reducing environmental impact.
        </p>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-6">
          Our approach tackles core challenges in today's palm oil industry and offers a practical, 
          sustainable path to better performance.
        </p>
      </div>
    </section>
  );
};

export default Hero;
