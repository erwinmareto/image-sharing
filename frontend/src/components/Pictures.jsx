import Link from "next/link";

const Pictures = ({ imageData }) => {
  return (
    <section className="grid grid-cols-4 gap-1">
      <div className="flex flex-col gap-1">
        {imageData.map((image, i) => {
          if (i % 4 === 0 || i === 0) {
            return (
              <Link key={image.id} href={`/images/image/${image.id}`}>
                <img
                  className="border-4 border-[#5D9C59]"
                  src={image.image}
                  width={300}
                  height={250}
                  alt={`image${i + 1}`}
                />
              </Link>
            );
          }
        })}
      </div>

      <div className="flex flex-col gap-1">
        {imageData.map((image, i) => {
          if (i % 4 === 1 && i !== 0) {
            return (
              <Link key={image.id} href={`/images/image/${image.id}`}>
                <img
                  className="border-4 border-[#5D9C59]"
                  src={image.image}
                  width={300}
                  height={250}
                  alt={`image${i + 1}`}
                />
              </Link>
            );
          }
        })}
      </div>

      <div className="flex flex-col gap-1">
        {imageData.map((image, i) => {
          if (i % 4 === 2 && i !== 0) {
            return (
              <Link key={image.id} href={`/images/image/${image.id}`}>
                <img
                  className="border-4 border-[#5D9C59]"
                  src={image.image}
                  width={300}
                  height={250}
                  alt={`image${i + 1}`}
                />
              </Link>
            );
          }
        })}
      </div>

      <div className="flex flex-col gap-1">
        {imageData.map((image, i) => {
          if (i % 4 === 3 && i !== 0) {
            return (
              <Link key={image.id} href={`/images/image/${image.id}`}>
                <img
                  className="border-4 border-[#5D9C59]"
                  src={image.image}
                  width={300}
                  height={250}
                  alt={`image${i + 1}`}
                />
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Pictures;
