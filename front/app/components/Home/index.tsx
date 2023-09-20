"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const [id, setId] = useState(0);

  return (
    <>
      <div className="flex items-center space-x-2">
        <Label>Search ID:</Label>
        <Input
          type="number"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value, 10))}
        />
        <Button
          onClick={() => {
            router.push(`/details/${id}`);
          }}
        >
          SEND
        </Button>
      </div>
    </>
  );
}

export default Home;
