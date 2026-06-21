import Link from "next/link";

interface CategoryCardProps {
  id: string;
  name: string;
  visualCue: string;
  imageUrl: string;
}

export default function CategoryCard({ id, name, visualCue, imageUrl }: CategoryCardProps) {
  return (
    <Link 
      href={`/${id}`}
      className="group block p-6 border border-border hover:border-foreground transition-all duration-300 h-full flex flex-col"
    >
      <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">{name}</h3>
      
      <div className="aspect-[16/10] w-full bg-muted/10 border border-border overflow-hidden mb-6">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <p className="text-muted text-sm mt-auto group-hover:text-foreground transition-colors duration-300">
        {visualCue}
      </p>
    </Link>
  );
}
