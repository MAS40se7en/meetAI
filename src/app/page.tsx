'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const { data: session, isPending } = authClient.useSession();

  function onSubmit() {
    authClient.signUp.email({
      email,
      name,
      password
    }, {
      onError: (res) => {
        console.log(res);
        setError(res.error.message)
      },
      onSuccess: (res) => {
        window.alert("User created successfully");
      }
    })
  }
  
  function onLogin() {
    authClient.signIn.email({
      email,
      password
    }, {
      onError: (res) => {
        console.log(res);
        setError(res.error.message)
      },
      onSuccess: (res) => {
        window.alert("User created successfully");
      }
    })
  }

  if (isPending) {
    return <div>Loading...</div>
  }

  if (session) {
    return (
      <div>
        <h1>Welcome {session.user.name}</h1>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    )
  }

  return (
    <div>
      <div>
      <h1>Create User</h1>
      <Input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Create User</Button>
      {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        <h1>Login</h1>
        <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  );
}
