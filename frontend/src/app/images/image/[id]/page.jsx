import { cookies } from "next/headers";

import { getImagesByIdWithDetails } from "@/fetcher/images";
import DetailPage from "@/pages/DetailPage";

export default async function ImageDetail({ params }) {
  const { id } = params;
  const cookieJar = cookies();
  const cookieId = cookieJar.get("id");

  const { data } = await getImagesByIdWithDetails(id);

  return (
    <DetailPage
      loggedUserId={cookieId?.value}
      id={id}
      imageUserId={data.userId}
      url={data.image}
      caption={data.caption}
      category={data.category}
      username={data.user.username}
      comments={data.Comment}
    />
  );
}
