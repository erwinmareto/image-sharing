import { getUserWithImages } from "@/fetcher/images";
import UserPage from "@/pages/UserPage";

export default async function Users({ params }) {
  const { username } = params;
  const { data } = await getUserWithImages(username);
  return (
    <section className="flex justify-center">
      <UserPage userData={data} />
    </section>
  );
}
