import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl"> NewsPortal</Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/category/business">Business</Link>
          <Link href="/category/technology">Tech</Link>
          <Link href="/category/sports">Sports</Link>
        </div>
      </div>
    </nav>
  );
}
