import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";


export default function Design() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <div className="grid grid-cols-5 gap-6 w-full h-full py-5">
        <div className="w-32 h-32 rounded-full bg-foreground" />
        <div className="w-32 h-32 rounded-full bg-stroke" />
        <div className="w-32 h-32 rounded-full bg-typeface-1" />
        <div className="w-32 h-32 rounded-full bg-typeface-2" />
        <div className="w-32 h-32 rounded-full bg-typeface-3" />
        <div className="w-32 h-32 rounded-full bg-primary" />
        <div className="w-32 h-32 rounded-full bg-secondary" />
        <div className="w-32 h-32 rounded-full bg-card" />
        <div className="w-32 h-32 rounded-full bg-card-1" />
        <div className="w-32 h-32 rounded-full bg-card-2" />
        <div className="w-32 h-32 rounded-full bg-card-3" />
        <div className="w-32 h-32 rounded-full bg-card-4" />
      </div>
      <div className="flex gap-10 w-full h-full py-10"> 
        <Button size="lg" className="">Submit</Button>
        <Button size="lg" variant="outline">Submit</Button>
        <Button size="lg" variant="destructive">Danger</Button>
        <Button size="lg" variant="link">Click here</Button>
        <Button size="lg" variant="ghost">Toggle</Button>
        <Button size="lg" variant="successive">Success</Button>
        <Button size="lg" variant="warning">Warning</Button>
      </div>
      <div className="flex flex-col gap-8 h-full w-full text-5xl">
        <p className="text-typeface-1">Every great design begins with an even better story.</p>
        <p className="text-typeface-2 font-inter">Every great design begins with an even better story.</p>
        <p className="text-typeface-3 font-serif">Every great design begins with an even better story.</p>
      </div>
      <div className="flex flex-col gap-8 h-full w-full mt-32">
        <p className="text-typeface-1 text-6xl">Every great design begins with an even better story.</p>
        <p className="text-typeface-1 text-5xl">Every great design begins with an even better story.</p>
        <p className="text-4xl">Every great design begins with an even better story.</p>
        <p className="text-3xl">Every great design begins with an even better story.</p>
        <p className="text-2xl">Every great design begins with an even better story.</p>
        <p className="text-xl">Every great design begins with an even better story.</p>
        <p className="text-lg">Every great design begins with an even better story.</p>
        <p className="text-base">Every great design begins with an even better story.</p>
        <p className="text-sm">Every great design begins with an even better story.</p>
        <p className="text-xs">Every great design begins with an even better story.</p>
      </div>
    </main>
  );
}
