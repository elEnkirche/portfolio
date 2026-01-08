import { MySocialIcons } from "@/components/MySocialIcons";

// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background w-full gap-12 overflow-hidden">
      <MySocialIcons/>
      <h1 className="text-lg font-semibold tracking-tight text-foreground">Consulter mon CV - Version française & anglaise disponibles</h1>
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl h-[40vh] px-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-foreground text-center">
            CV – Français 🇫🇷
          </h3>
          <iframe src="/CV_ENKIRCHE.pdf" className="w-full h-full rounded-lg shadow" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-foreground text-center">
            resume – English En
          </h3>
          <iframe src="/resume_ENKIRCHE.pdf" className="w-full h-full rounded-lg shadow" />
        </div>
      </div>
    </div>
  );
}
