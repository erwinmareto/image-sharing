"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addImage, deleteImage, editImage } from "@/fetcher/images";

const PostForm = ({ imageId, editData, userId }) => {
  const categories = [
    "ART",
    "NATURE",
    "PORTRAIT",
    "ANIMALS",
    "FOOD",
    "EVENTS",
    "TECH",
    "SPORTS",
    "FASHION",
    "MEMES",
    "HOLIDAYS",
  ];
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('userId', userId)
    if (editData) {
      await editImage(formData, imageId)
      return router.push("/");
    }
    await addImage(formData);
    router.push("/");
  };

  const handleDelete = async () => {
    await deleteImage(imageId);
    router.push("/");
  };

  return (
    <div className="bg-slate-200 p-10 flex justify-center items-center my-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <h1 className="text-3xl">{editData ? "Edit" : "Post"}</h1>
        {preview && (
          <div className="relative w-80 ">
            <img
              src={preview}
              alt="Preview"
              className="object-contain rounded-md shadow-lg w-full"
            />
          </div>
        )}
        {!editData && (
          <div className="w-full">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image:
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}
        <div className="w-full">
          <label
            htmlFor="caption"
            className="block text-sm font-medium text-gray-700"
          >
            Caption:
          </label>
          <input
            type="text"
            name="caption"
            defaultValue={editData?.caption}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <select
            name="category"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default PostForm;
