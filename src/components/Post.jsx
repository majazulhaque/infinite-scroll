import { useEffect } from "react";

export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        console.log(param);
        if (param[0].isIntersecting) {
          observer.unobserve(lastImg);
          setPageNo((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    ); // threshold update when image 100% into view
    const lastImg = document.querySelector(".image-post:last-child");
    // console.log(lastImg);
    if (!lastImg) {
      return;
    }
    observer.observe(lastImg);

    return () => {
      if (lastImg) {
        observer.unobserve(lastImg);
      }
      observer.disconnect();
    };
  }, [data]);
  return (
    <div className="img-container">
      {data?.map((img) => {
        return (
          <img
            className="image-post"
            key={img.id}
            src={img.download_url}
            alt=""
          />
        );
      })}
    </div>
  );
}
