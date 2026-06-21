import type { StructureItem } from "@/data/mockData";

interface StructureItemProps {
  item: StructureItem;
}

export default function StructureItemComponent({ item }: StructureItemProps) {
  return (
    <article className="mb-24 last:mb-0 border-t border-border pt-12 first:border-0 first:pt-0">
      <div className="aspect-[16/9] bg-muted/10 border border-border flex items-center justify-center mb-8 overflow-hidden">
        <img 
          src={item.image_placeholder} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold tracking-tight mb-2 uppercase">{item.title}</h2>
          <div className="flex items-center gap-3 text-sm text-muted font-medium mb-6 uppercase tracking-wider">
            <span>{item.location}</span>
            <span className="w-1 h-1 bg-muted rounded-full"></span>
            <span>{item.era}</span>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
