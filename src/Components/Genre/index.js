import React from "react";
import { useEffect, useState } from "react";

import Api from "../../services/Api";
import { Categories } from "./style";

export default function Genre() {
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
    <Categories>
      {movieList.map((item, key) => (
        <div key={key}>{item.title}</div>
      ))}
    </Categories>
  );
}
