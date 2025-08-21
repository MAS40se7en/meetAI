'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeView() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: 'world' }));

  return (
    <div>
      {data?.greeting}
    </div>
  );
}
