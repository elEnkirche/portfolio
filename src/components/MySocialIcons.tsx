import { SocialIcons } from "@/components/ui/social-icons";

export function MySocialIcons() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Connect with me</h1>
        <p className="text-sm text-foreground">Click on the icons below</p>
      </div>
      <SocialIcons />
    </div>
  )
}