import { getImagesByCategory } from "@/fetcher/images";
import ImagePage from "@/pages/ImagePage";

export default async function Category({ params }) {
  const { category } = params;
  const { data } = await getImagesByCategory(category);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="text-center">
        <ImagePage data={data} currentCategory={category} />
      </section>
    </main>
  );
}
