"use client";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const [searchparams, setSearchparams] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onSubmit = e => {
    e.preventDefault();
    router.push(`poshuk-po-saytu?${createQueryString("query", searchparams)}`);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-x-1">
      <input
        onChange={e => setSearchparams(e.target.value)}
        value={searchparams}
        className="outline outline-emerald-400"
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Search;
