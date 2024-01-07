"use client";

import Pictures from "@/components/Pictures";
import Link from "next/link";
import { useState } from "react";

const ImagePage = ({ data, currentCategory }) => {
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
  const [show, setShow] = useState(false);
  return (
    <>
      <h1 onClick={() => setShow(!show)} className="text-6xl my-5">
        {currentCategory || "ALL"}
      </h1>
      <ul>
        {show &&
          categories.map((category) => (
            <li>
              <Link href={`/images/categories/${category}`}>{category}</Link>
            </li>
          ))}
      </ul>
      <Pictures imageData={data} />
    </>
  );
};

export default ImagePage;
