"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSearch(q); }}
      className="flex gap-2 mb-6"
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search news..."
        className="flex-1 border p-2 rounded"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
    </form>
  );
}
