import { Card } from "@/components/ui/card";

export default async function Dashboard() {


  return (
    <main className="px-24">
      <Card className="rounded-2xl bg-slate-950 shadow-2xl text-white text-center">
        <div className="mx-auto max-w-[550px] p-10">
          <p className="text-2xl mb-2">Welcome, {}</p>
          <h1 className="text-4xl font-bold leading-normal">
            Today is an important day. Today you start.
          </h1>
        </div>
      </Card>
    </main>
  );
}