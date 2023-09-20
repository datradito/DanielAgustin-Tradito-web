async function getPost(id: string) {
  const res = await fetch(`https://scalio-backend.vercel.app/posts/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return (
    <div>
      Details: <span>{post.body}</span>
    </div>
  );
}
