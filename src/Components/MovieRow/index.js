import React from "react";

import { useEffect, useState } from "react";

import Api from "../../services/Api";

export default function MovieRow() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getHomeList();
      setMovieList(list);
      console.log(list);
    };
    loadAll();
  }, []);
  return (
    <div>
      {movieList.map((item, key) => (
        <div key={key}>{item.title}</div>
      ))}
    </div>
  );
}
