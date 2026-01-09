import { MyTimeline } from "@/components/MyTimeline";

// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
          <MyTimeline/>
    </div>
  );
}
