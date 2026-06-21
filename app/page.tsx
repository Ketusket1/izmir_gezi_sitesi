import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { categoriesData } from "@/data/mockData";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-24 flex flex-col">
        <section className="mb-16 md:mb-24 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
            Architectural Anatomy
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            A curated structural and historical guide to the city. Explore the spatial layers that define the urban fabric, stripped of decorative rhetoric.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          {categoriesData.map((category) => (
            <div key={category.id} className="h-full">
              <CategoryCard 
                id={category.id}
                name={category.name}
                visualCue={category.visual_cue}
                imageUrl={category.image_url}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
