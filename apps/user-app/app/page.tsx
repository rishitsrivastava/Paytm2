import { PrismaClient } from "@repo/db";
const client = new PrismaClient();

export default function Home() {
  return (
    <div className="bg-slate-900">
      Hi from user-app
    </div>
  );
}
