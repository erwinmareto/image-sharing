import { cookies } from "next/headers";

import PostForm from "@/components/PostForm";
import { getImagesById } from "@/fetcher/images";

export default async function Edit({ params }) {
  const { id } = params;
  const cookieJar = cookies();
  const userId = cookieJar.get("id");
  const {data} = await getImagesById(id);
  return (
    <section>
      <PostForm imageId={id} editData={data} userId={userId.value} />
    </section>
  );
}
