import Header from "@/components/Header";
import StructureItemComponent from "@/components/StructureItem";
import { categoriesData } from "@/data/mockData";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return categoriesData.map((cat) => ({
    category: cat.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryData = categoriesData.find((cat) => cat.id === params.category);

  if (!categoryData) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <header className="mb-16 md:mb-24 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            {categoryData.name}
          </h1>
        </header>

        <div className="flex flex-col">
          {categoryData.items.map((item) => (
            <StructureItemComponent key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
