import { getAllImages } from "@/fetcher/images";
import ImagePage from "@/pages/ImagePage";

export default async function Home() {
  const { data } = await getAllImages();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="text-center">
        <ImagePage data={data} />
      </section>
    </main>
  );
}
