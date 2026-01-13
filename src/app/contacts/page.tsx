import { MySocialIcons } from "@/components/MySocialIcons";

// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background w-full min-h-screen overflow-y-auto md:overflow-hidden snap-y snap-mandatory h-screen">
  
  {/* Section 1: Social + Fade */}
  <section className="h-screen w-full flex flex-col justify-center items-center gap-8 snap-start relative flex-shrink-0">
    <MySocialIcons />
    <div className="fade-overlay absolute bottom-0 left-0 right-0 h-32 w-full bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
  </section>

  {/* Section 2: CVs */}
  <section className="h-screen w-full flex flex-col justify-center items-center gap-10 px-4 md:px-8 snap-start flex-shrink-0 relative">
    <h1 className="text-lg md:text-xl font-semibold tracking-tight text-center text-foreground max-w-2xl">
      Consultez mon CV - Version française & anglaise disponibles
    </h1>
    
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
      <div className="flex flex-col items-center gap-4 h-[70vh] md:h-[80vh]">
        <h3 className="text-base font-semibold text-foreground">CV – Français</h3>
        <iframe 
          src="/CV_ENKIRCHE.pdf" 
          className="w-full flex-1 min-h-[60vh] rounded-xl shadow-xl border-0"
        />
      </div>
      
      <div className="flex flex-col items-center gap-4 h-[70vh] md:h-[80vh]">
        <h3 className="text-base font-semibold text-foreground">Resume – English</h3>
        <iframe 
          src="/resume_ENKIRCHE.pdf" 
          className="w-full flex-1 min-h-[60vh] rounded-xl shadow-xl border-0"
        />
      </div>
    </div>
    
    {/* Footer copyright centré en bas */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground text-center">
      © {new Date().getFullYear()} Enkirche Elias — Tous droits réservés
    </div>
  </section>
</div>

  );
}
