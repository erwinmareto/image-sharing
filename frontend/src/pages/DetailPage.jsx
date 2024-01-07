"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { addComment } from "@/fetcher/comments";
import { deleteImage } from "@/fetcher/images";

const DetailPage = ({
  loggedUserId,
  id,
  imageUserId,
  url,
  caption,
  category,
  username,
  comments,
}) => {
  const router = useRouter();

  const handleComment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      userId: loggedUserId,
      imageId: id,
      comment: formData.get("comment"),
    };
    await addComment(payload);
    router.refresh();
  };

  const handleDelete = async () => {
    await deleteImage(id);
    router.push("/");
  };
  return (
    <section className="container flex mx-auto my-10 h-[75vh]">
      <img
        src={`${url}`}
        alt="example"
        className="w-1/2 h-auto object-contain bg-neutral-400"
      />
      <div className="w-1/2 p-4 bg-[#C7E8CA] overflow-auto flex flex-col">
        {imageUserId == loggedUserId && (
          // <Link href={`/images/edit/${id}`} className="bg-sky-500 p-1">
          //   Edit
          // </Link>
          <button onClick={handleDelete} className="bg-red-500">Delete</button>
        )}
        <div className="flex justify-between border-b-2 border-[#5D9C59]">
          <Link href={`/users/${username}`}>
          <h2 className="text-xl">{username}</h2>
          </Link>
          <h2 className="text-xl">{category}</h2>
        </div>
        <div className="border-b-2 border-[#5D9C59] py-5">
          <p>{caption}</p>
        </div>
        <div className="flex-grow">
          {comments.map((comment) => (
            <div key={comment.id} className="my-5 flex justify-between">
              <div>
                <Link href={`users/${comment.user.username}`}>
                <h4 className="text-xl">{comment.user.username}</h4>
                </Link>
                <p>{comment.comment}</p>
              </div>
              {(comment.userId == loggedUserId ||
                imageUserId == loggedUserId) && (
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
        <div>
          {loggedUserId && (
            <form onSubmit={handleComment}>
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="w-full px-3 py-2 border-b border-[#5D9C59] bg-transparent focus:outline-none focus:border-indigo-500 sm:text-sm"
              />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default DetailPage;
