import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";

async function getPost(id: string) {
  const apiUrl = process.env.API_POSTS;
  const res = await fetch(`${apiUrl}/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post.title || !post.body) {
    // Redirect to Home with an error message
    window.location.href = `/?error=${params.id}`;
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3">
        <div>
          <Label className="p-4 text-2xl font-bold">Title</Label>

          <h3 className="p-4">{post.title}</h3>
          <Label className="p-4 text-2xl font-bold">Body</Label>
          <Textarea className="h-32 w-1/3 p-4" readOnly>
            {post.body}
          </Textarea>
        </div>
        <div className=" justify-center p-6">
          <Link href="/">
            <Button className="btn-text-color rounded px-4 py-2">Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
