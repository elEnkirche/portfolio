import { SocialIcons } from "@/components/ui/social-icons";

export function MySocialIcons() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Connect with me</h1>
        <p className="text-sm text-neutral-500 md:text-neutral-400">Click on the icons below</p>
      </div>
      <SocialIcons />
    </div>
  )
}