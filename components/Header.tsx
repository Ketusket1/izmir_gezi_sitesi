import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8 mb-12 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight uppercase group">
          Layers of <span className="text-muted group-hover:text-foreground transition-colors duration-300">İzmir</span>
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <Link href="/archaeological" className="hover:text-muted transition-colors">Archaeological</Link>
          <Link href="/modern" className="hover:text-muted transition-colors">Modern</Link>
          <Link href="/historical" className="hover:text-muted transition-colors">Historical</Link>
        </nav>
      </div>
    </header>
  );
}
