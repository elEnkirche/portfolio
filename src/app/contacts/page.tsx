import { MySocialIcons } from "@/components/MySocialIcons";

// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <div className="min-h-screen w-full">
        <div className="absolute top-0 left-0 w-full">
          <MySocialIcons/>
        </div>
      </div>
    </main>
  );
}
