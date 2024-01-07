import { cookies } from "next/headers";

import PostForm from "@/components/PostForm";

const PostPage = () => {
  const cookieJar = cookies()
  const id = cookieJar.get('id')
  return (
    <div className="flex justify-center">
      <PostForm userId={id.value} />
    </div>
  );
};

export default PostPage;
