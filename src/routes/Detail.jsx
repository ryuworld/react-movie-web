import { useParams } from "react-router";
import React from "react";
import { axios } from "axios";

export default function Detail() {
  const { id } = useParams();
  useEffect(() => {
    const json = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    console.log(json);
    
  }, []);
  return (
    <div>
      <div>Detail</div>
      <p>어쩌구 저쩌구 왜 안될까요</p>
    </div>
  );
}
