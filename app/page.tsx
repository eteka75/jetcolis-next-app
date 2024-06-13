import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <main>
      <h1> {JSON.stringify(session, null, 2)}</h1>

      <div className="flex mt-10 gap-2">
        <Button>Click me</Button>
        <Input />
      </div>
    </main>
  );
}
