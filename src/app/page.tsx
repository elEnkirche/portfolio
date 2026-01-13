import { MyTimeline } from "@/components/MyTimeline";

// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="h-full overflow-y-scroll scroll-smooth">
          <MyTimeline/>
    </div>
  );
}
