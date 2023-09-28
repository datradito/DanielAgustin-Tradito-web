"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import ToggleTheme from "../ToggleTheme";

import { useSearchParams } from "next/navigation";

import Logo from "@/assets/logo-white.svg";

function Home() {
  const [id, setId] = useState("");
  const searchParams = useSearchParams();

  const error = searchParams.get("error");
  console.log("error", error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 font-montserrat">
      <header className="fixed top-0 z-50 flex w-full items-center space-x-4 bg-white p-4 shadow-md">
        <Image src={Logo} alt="Scalio Logo" width={50} height={50} />
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--foreground)" }}
        >
          Scalio Challenge
        </h1>
        <ToggleTheme />
      </header>

      <div className="mt-24 grid grid-cols-1 grid-rows-5">
        <div className="mt-4 w-80 rounded bg-white pb-12 shadow-md">
          <h2 className="mb-4 p-2 text-xl font-bold">Search Post</h2>
          <Input
            className="mb-4 w-full appearance-none"
            type="number"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{
              MozAppearance: "textfield",
            }}
          />
          <div className="flex justify-center">
            <Link href={`/details/${id}`}>
              <Button className="btn-text-color rounded px-4 py-2">Send</Button>
            </Link>
          </div>
          {!!error && (
            <div className="mt-4 text-red-500">
              <p>Error: {error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
