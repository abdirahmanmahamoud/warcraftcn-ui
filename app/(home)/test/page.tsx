import { Skeleton } from "@/components/ui/warcraftcn/skeleton";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-12 text-center">Skeleton Faction Variants</h1>
      
      {/* Grid layout with all 5 factions */}
      <div className="grid grid-cols-5 gap-10 max-w-7xl">
        {/* Default */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center text-amber-400">Default</h2>
          <Skeleton className="size-24 mx-auto" variant="circular" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-32 w-full mt-3" />
        </div>

        {/* Orc */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center text-red-400">Orc</h2>
          <Skeleton faction="orc" className="size-24 mx-auto" variant="circular" />
          <Skeleton faction="orc" className="h-5 w-full" />
          <Skeleton faction="orc" className="h-5 w-4/5" />
          <Skeleton faction="orc" className="h-32 w-full mt-3" />
        </div>

        {/* Elf */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center text-teal-400">Elf</h2>
          <Skeleton faction="elf" className="size-24 mx-auto" variant="circular" />
          <Skeleton faction="elf" className="h-5 w-full" />
          <Skeleton faction="elf" className="h-5 w-4/5" />
          <Skeleton faction="elf" className="h-32 w-full mt-3" />
        </div>

        {/* Human */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center text-blue-400">Human</h2>
          <Skeleton faction="human" className="size-24 mx-auto" variant="circular" />
          <Skeleton faction="human" className="h-5 w-full" />
          <Skeleton faction="human" className="h-5 w-4/5" />
          <Skeleton faction="human" className="h-32 w-full mt-3" />
        </div>

        {/* Undead */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center text-purple-400">Undead</h2>
          <Skeleton faction="undead" className="size-24 mx-auto" variant="circular" />
          <Skeleton faction="undead" className="h-5 w-full" />
          <Skeleton faction="undead" className="h-5 w-4/5" />
          <Skeleton faction="undead" className="h-32 w-full mt-3" />
        </div>
      </div>

      {/* Additional info */}
      <p className="mt-10 text-sm text-muted-foreground text-center">
        Each faction features unique colors, shimmer effects, and icon patterns
      </p>
    </div>
  );
}
