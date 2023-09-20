import { Suspense } from "react";
import Loading from "./loading";

export default function DetailsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {/* Include shared UI here e.g. a footer */}
    </section>
  );
}
