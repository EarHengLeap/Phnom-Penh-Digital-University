import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="px-24">
      <Card className="rounded-2xl bg-slate-950 shadow-2xl text-white text-center h-[760px]">
        <div className="mx-auto max-w-[683px] mt-[215px]">
          <h1 className="text-6xl font-bold leading-tight">
            Welcome to <br/> Phnom Penh Digital University
          </h1>
          <p className="text-3xl mt-2">Let's Register your account</p>
          <Button className="mt-12" variant={"secondary"} size={"lg"}>
            Learn More
          </Button>
        </div>
      </Card>
    </main>
  );
}
