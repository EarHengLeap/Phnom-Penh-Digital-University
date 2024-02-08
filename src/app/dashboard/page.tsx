import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuthed = await isAuthenticated();

  if (!isAuthed) {
    redirect("/not-authorized");
  }

  return (
    <main className="px-24">
      <Card className="rounded-2xl bg-slate-950 shadow-2xl text-white text-center">
        <div className="mx-auto max-w-[550px] p-10">
          <p className="text-2xl mb-2">Welcome, {user?.given_name}</p>
          <h1 className="text-4xl font-bold leading-normal">
            Today is an important day. Today you start.
          </h1>
        </div>
      </Card>
    </main>
  );
}