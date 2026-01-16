import { MySocialIcons } from "@/components/MySocialIcons";

export default function Contacts() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start flex items-center justify-center text-foreground">
        <MySocialIcons />
        <div className="fade-overlay absolute bottom-0 left-0 right-0 h-24 sm:h-32 w-full bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
      </section>

      {/* ===== DESKTOP : CVs côte à côte ===== */}
      <section className="hidden md:flex h-screen snap-start flex flex-col items-center justify-center bg-oklch(0.13 0.028 261.692) gap-3">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-center text-foreground max-w-sm sm:max-w-xl lg:max-w-2xl leading-tight mt-5 md:mt-20">
          Consultez mon CV - Version française & anglaise disponibles
        </h1>
        
        <div className="w-full max-w-md sm:max-w-4xl lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 flex-1 min-h-[50vh] mb-20 md:mb-5">
          {/* CV Français */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 h-[55vh] sm:h-[65vh] md:h-[80vh]">
            <h3 className="text-sm sm:text-base font-semibold text-neutral-600 md:text-neutral-300 text-center">CV – Français</h3>
            <iframe 
              src="/CV_ENKIRCHE.pdf#navpanes=0" 
              className="w-full flex-1 min-h-[45vh] sm:min-h-[55vh] rounded-xl shadow-xl px-4"
            />
          </div>
          
          {/* CV English */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 h-[55vh] sm:h-[65vh] md:h-[80vh]">
            <h3 className="text-sm sm:text-base font-semibold text-neutral-600 md:text-neutral-300 text-center">Resume – English</h3>
            <iframe 
              src="/resume_ENKIRCHE.pdf#navpanes=0" 
              className="w-full flex-1 min-h-[45vh] sm:min-h-[55vh] rounded-xl shadow-xl px-4"
            />
          </div>
        </div>
      </section>

      <section className="h-screen snap-start flex md:hidden items-center justify-center bg-background text-white">
        <div className="flex flex-col items-center gap-3 h-[70vh]">
          <h3 className="text-sm sm:text-base font-semibold text-foreground text-center">CV – Français</h3>
          <iframe 
            src="/CV_ENKIRCHE.pdf#navpanes=0" 
            className="w-full flex-1 min-h-[45vh] sm:min-h-[55vh] rounded-xl shadow-xl px-1"
          />
        </div>
      </section>

      <section className="h-screen snap-start flex md:hidden items-center justify-center bg-background text-white">
        <div className="flex flex-col items-center gap-3 h-[70vh]">
          <h3 className="text-sm sm:text-base font-semibold text-foreground text-center">Resume – English</h3>
          <iframe 
            src="/resume_ENKIRCHE.pdf#navpanes=0" 
            className="w-full flex-1 min-h-[45vh] sm:min-h-[55vh] rounded-xl shadow-xl px-1"
          />
        </div>
      </section>
    </div>
  )
}