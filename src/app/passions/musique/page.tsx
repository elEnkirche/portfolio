import { MyNavBar } from "@/components/MyNavBar";

export default function MusiquePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start text-foreground p-8">
      <header className="w-full">
        <MyNavBar />
      </header>

      <main className="flex flex-col items-center mt-16 gap-8 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Musique
        </h1>

        <p className="text-center text-lg md:text-xl text-muted-foreground">
          Bienvenue dans la section Musique ! 🎵
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <div className="bg-card rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Titre 1</h2>
            <p className="text-sm text-muted-foreground">Artiste</p>
          </div>

          <div className="bg-card rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Titre 2</h2>
            <p className="text-sm text-muted-foreground">Artiste</p>
          </div>

          <div className="bg-card rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
            <h2 className="font-semibold text-lg">Titre 3</h2>
            <p className="text-sm text-muted-foreground">Artiste</p>
          </div>
        </div>
      </main>
    </div>
  );
}
