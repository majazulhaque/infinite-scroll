import { useEffect, useState } from "react";
import Post from "./Post";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const fetchData = async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=3`
    );
    const data = await response.json();
    setData((oldData) => [...oldData, ...data]);
  };

  useEffect(() => {
    fetchData(pageNo);
  }, [pageNo]);
  return (
    <div>
      <Post data={data} setPageNo={setPageNo} />
    </div>
  );
}
