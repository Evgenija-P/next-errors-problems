"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPageComponent() {
  const searchParams = useSearchParams();

  const search = searchParams.get("query");

  // This will be logged on the server during the initial render
  // and on the client on subsequent navigations.


  return <>Search: {search}</>;
}
