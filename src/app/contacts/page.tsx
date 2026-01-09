import { MySocialIcons } from "@/components/MySocialIcons";

// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="
      flex flex-col items-center 
      bg-background w-full gap-8
      overflow-y-auto
      md:overflow-hidden
      mt-10 md:mt-20
    "> 
      <MySocialIcons/>
      <h1 className="text-base font-semibold tracking-tight text-foreground">Consultez mon CV - Version française & anglaise disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl h-[190vh] md:h-[50vh] px-0.5 md:px-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-foreground text-center">
            CV – Français
          </h3>
          <iframe src="/CV_ENKIRCHE.pdf" className="w-full h-full rounded-lg shadow" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-foreground text-center">
            resume – English
          </h3>
          <iframe src="/resume_ENKIRCHE.pdf" className="w-full h-full rounded-lg shadow" />
        </div>
      </div>
      <div className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Enkirche Elias — Tous droits réservés
      </div>
    </div>
  );
}
