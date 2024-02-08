import { Card } from "@/components/ui/card";

export default function NotAuthorized() {
  return (
    <main className="px-24">
      <Card className="flex items-center justify-center rounded-2xl bg-slate-950 shadow-2xl text-white text-center h-[760px]">
        <div className="mx-auto max-w-[683px]">
          <p className="text-3xl">
            You are not authorized, please Login or Create an account.
          </p>
        </div>
      </Card>
    </main>
  );
}
