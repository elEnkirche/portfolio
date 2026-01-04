import { MyTimeline } from "@/components/MyTimeline";

// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll bg-background scroll-smooth snap-y snap-mandatory">
      <div className="min-h-screen w-full">
        <div className="absolute top-0 left-0 w-full">
          <MyTimeline/>
        </div>
      </div>
    </main>
  );
}
