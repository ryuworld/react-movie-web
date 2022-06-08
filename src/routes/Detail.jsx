import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [test, setTest] = useState();
  useEffect(() => {
    async function fetchData() {
      const json = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      console.log(json);
      setTest(json);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div>Detail</div>
      <p>어쩌구 저쩌구 왜 안될까요</p>
      {JSON.stringify(test)}
    </div>
  );
}
