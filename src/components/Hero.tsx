const Hero = () => {
  return <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          The Next Evolution In Palm Oil Extraction
        </h1>
        
        {/* Logo */}
        <div className="mb-10 flex justify-center shadow-none rounded-none">
          <div className="w-48 h-48 flex items-center justify-center shadow-none">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-lg border border-border shadow-none" />
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
    </section>;
};
export default Hero;