import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl font-bold text-red-500">
      HELLO WORLD
      <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
